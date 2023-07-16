'use client';
import {createContext} from "react"
import {PopupType} from "@/widgets/Popup/ui/Popup";

interface OpenCallbackProps {
  notification: string,
  type: PopupType,
}

interface PopupContextProps {
  open: boolean,
  isOpened: (props: OpenCallbackProps) => void,
}

const PopupContext = createContext<PopupContextProps>({ open: false, isOpened: () => {} } );

export {PopupContext, PopupContextProps, OpenCallbackProps}