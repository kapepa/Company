import type { Metadata } from 'next'
import {Suspense} from "react";
import Loading from "@/app/about/loading";

export const metadata: Metadata = {
  title: 'About | Company',
  description: 'about page',
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