import '../styles/globals.scss'
import type { Metadata } from 'next'
import Panel from "../widgets/Panel/ui/Panel";
import {ReactNode} from "react";
import {PopupProvider} from "@/context/Popup/lib/PopupProvider";

export const metadata: Metadata = {
  title: 'Company',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PopupProvider>
          <div className="flex direction-column vh100">
            <Panel/>
            {children}
          </div>
          <div id="modal-portal"/>
        </PopupProvider>
      </body>
    </html>
  )
}
