FROM node:22-bookworm-slim AS build
RUN corepack enable
WORKDIR /src
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# `next.config.js` sets output:'export', so the site is bytes in ./out.
# Served with -404 rather than -spa: every route here has its own pre-rendered
# .html, so -spa could only ever answer a real miss with a 200 homepage.
FROM ghcr.io/hanzoai/static:0.4.1 AS serve
COPY --from=build /src/out /public
EXPOSE 3000
ENTRYPOINT ["/static", "-port", "3000", "-root", "/public", "-404", "404.html"]
