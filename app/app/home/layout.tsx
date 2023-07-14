import type { Metadata } from 'next'
import {FC, Suspense, ReactNode} from "react";
import Loading from "@/app/home/loading";

export const metadata: Metadata = {
  title: 'Home | Company',
  description: 'Homa page',
}

export default function RootLayout({children}: {
  children: ReactNode
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}