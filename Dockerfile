FROM node:22-bookworm-slim AS build
RUN corepack enable
WORKDIR /src
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# `next.config.js` sets output:'export', so the site is bytes in ./out.
#
# The base TAG is load-bearing. Clean-URL fallback (/ai -> ai.html) and the -404
# flag arrived together in hanzoai/static 44ff6d7, first released in v0.5.1.
# v0.4.1 has neither: -404 aborts the process ("flag provided but not defined"),
# and with no .html fallback -spa is the only flag that boots — which then
# answers every route with the homepage at 200. That combination shipped this
# site with only its front page reachable. Do not move this below v0.5.1.
FROM ghcr.io/hanzoai/static:v0.5.6 AS serve
COPY --from=build /src/out /public
EXPOSE 3000
# -404, not -spa: every route here has its own pre-rendered .html, so a miss is
# a real miss and gets a 404 instead of a 200 homepage.
ENTRYPOINT ["/static", "-port", "3000", "-root", "/public", "-404", "404.html"]
