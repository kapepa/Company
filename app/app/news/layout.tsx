import type { Metadata } from 'next'
import {ReactNode, Suspense} from "react";
import Loading from "@/app/news/loading";

export const metadata: Metadata = {
  title: 'News | Company',
  description: 'news page',
}

export default function RootLayout({children}: {
  children: ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}