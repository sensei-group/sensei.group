/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/PPy34tHWsx1
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export function Blog() {
  return (
    <div className="flex pt-20 min-h-screen flex-col bg-gray-950 text-gray-50">
      <main className="flex-1 px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Sensei Blog</h1>
            <p className="text-gray-400">Stay up to date with the latest news and insights from Sensei.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg bg-background p-6 text-gray-300">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Latest Posts</h2>
                <Link href="/blog/all" className="text-gray-400 hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Revolutionizing AI: Sensei's Cutting-Edge Advancements</h3>
                  <p className="text-gray-400">
                    Explore the groundbreaking AI technologies developed by Sensei, pushing the boundaries of what's
                    possible.
                  </p>
                  <Link href="/blog/individual" className="text-gray-400 hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The Future of Work: AI's Impact on Productivity</h3>
                  <p className="text-gray-400">
                    Discover how AI can transform the way we work, increasing efficiency and productivity in
                    unprecedented ways.
                  </p>
                  <Link href="/blog/individual" className="text-gray-400 hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-background p-6 text-gray-300">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Featured Posts</h2>
                <Link href="/blog/all" className="text-gray-400 hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Ethical AI: Navigating the Complexities</h3>
                  <p className="text-gray-400">
                    Explore the ethical considerations and challenges surrounding AI development and deployment.
                  </p>
                  <Link href="/blog/individual" className="text-gray-400 hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">AI in Healthcare: Transforming Patient Care</h3>
                  <p className="text-gray-400">
                    Discover how AI is revolutionizing the healthcare industry, improving patient outcomes and driving
                    innovation.
                  </p>
                  <Link href="/blog/individual" className="text-gray-400 hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-background p-6 text-gray-300">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Popular Topics</h2>
                <Link href="/blog/all" className="text-gray-400 hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">AI and Cybersecurity: Protecting the Digital Frontier</h3>
                  <p className="text-gray-400">
                    Explore the role of AI in enhancing cybersecurity measures and safeguarding digital systems.
                  </p>
                  <Link href="/blog/individual" className="text-gray-400 hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">AI in Education: Personalizing Learning Experiences</h3>
                  <p className="text-gray-400">
                    Discover how AI is transforming education by providing personalized learning experiences and
                    enhancing teaching methods.
                  </p>
                  <Link href="/blog/individual" className="text-gray-400 hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-background p-6 text-gray-300">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Subscribe to Our Newsletter</h2>
              <MailIcon className="h-5 w-5 ml-2 stroke-current" />
            </div>
            <p className="text-gray-400">
              Stay informed about the latest developments in AI and receive exclusive insights from our team.
            </p>
            <form className="mt-4 space-y-4">
              <div>
                <Label htmlFor="email" className="font-inter">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="font-inter bg-background border border-gray-600 text-gray-400"
                />
              </div>
              <Button type="submit" className="w-full font-inter bg-white text-background">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="rounded-lg bg-background p-6 text-gray-300">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Comments Section</h2>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/blog/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="font-bold">John Doe</div>
                      <div className="text-sm text-gray-400">2 hours ago</div>
                    </div>
                    <p>
                      This is an insightful article! I appreciate the in-depth analysis and the practical examples
                      provided.
                    </p>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <ThumbsUpIcon className="w-4 h-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ThumbsDownIcon className="w-4 h-4" />
                        <span className="sr-only">Dislike</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShareIcon className="w-4 h-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2 pl-8">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="/blog/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="font-bold">Jane Smith</div>
                      <div className="text-sm text-gray-400">1 hour ago</div>
                    </div>
                    <p>I agree, the examples really helped me understand the concepts better.</p>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <ThumbsUpIcon className="w-4 h-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ThumbsDownIcon className="w-4 h-4" />
                        <span className="sr-only">Dislike</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShareIcon className="w-4 h-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Leave a Comment</h4>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Write your comment..."
                      className="font-inter bg-background border border-gray-600 text-gray-400"
                    />
                    <Button type="submit" className="w-full font-inter bg-white text-background">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Share Buttons</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FacebookIcon className="w-4 h-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TwitterIcon className="w-4 h-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function ThumbsDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
