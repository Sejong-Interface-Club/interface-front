// src/app/layout.js
"use client"; // 클라이언트 컴포넌트로 설정

import { Libre_Franklin } from 'next/font/google';
import { Taviraj } from 'next/font/google';
import './globals.css';

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
});

const taviraj = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-taviraj',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Layout({ children }) {
  return (
      <html lang="en">
      <body className={`${libre_franklin.variable} ${taviraj.variable}`}>
      {children}
      </body>
      </html>
  );
}
