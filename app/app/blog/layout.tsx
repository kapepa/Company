import type { Metadata } from 'next'
import {Suspense} from "react";
import Loading from "@/app/blog/loading";

export const metadata: Metadata = {
  title: 'Blog | Company',
  description: 'blog page',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}