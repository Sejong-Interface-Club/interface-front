// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from 'next/font/google'
import { Taviraj } from 'next/font/google'
import './globals.css'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

const taviraj = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-taviraj',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // 사용할 폰트의 무게를 지정합니다.
})

export default function Layout({ children }) {
  return (
      <html lang="en">
      <body className={`${libre_franklin.variable} ${taviraj.variable}`}>
      {children}
      </body>
      </html>
  )
}
