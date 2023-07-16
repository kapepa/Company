'use client';
import {useContext} from "react";
import {PopupContext, PopupContextProps} from "@/context/Popup/lib/PopupContext";

const UsePopup = () => {
  const {open, isOpened} = useContext<PopupContextProps>(PopupContext);
  return {open, isOpened};
}

export {UsePopup};