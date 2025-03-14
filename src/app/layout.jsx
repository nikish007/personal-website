import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Nikish',
    default:
      'Nikish Kumar - AI & Full-Stack Engineer',
  },
  description:
    'I’m Nikish, I specialize in building high-performance, full-stack applications and AI-powered solutions. With expertise in cloud infrastructure, scalable web architectures, and automation, I craft seamless user experiences. Passionate about leveraging AI, DevOps, and modern web technologies to solve real-world problems.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  icons: {
    icon: "/favicon.ico",   // Default favicon
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
