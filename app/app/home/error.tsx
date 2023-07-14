"use client"

import {Error} from "@/widgets/Error/ui/Error";

interface ErrorProps {
  error: Error
}

export default function ErrorWrapper({error}: ErrorProps) {
  return (
    <div className="container">
      <Error>{error.message}</Error>
    </div>
  )
}