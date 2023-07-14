'use client';
import {FC, ReactNode, useEffect, useRef, useState} from "react";
import { createPortal } from "react-dom"

interface PortalProps{
  children: ReactNode,
}

const Portal: FC<PortalProps> = ({children}) => {
  const ref = useRef<HTMLDivElement | any>(null);
  const [portal, setPortal] = useState<boolean>(false);

  useEffect(() => {
    Promise.resolve(document.getElementById("modal-portal")).then((el) => {
      ref.current = el;
      setPortal(prev => !prev);
    });

    return () => setPortal(prev => !prev);
  }, [])

  return portal && createPortal(children, document.getElementById("modal-portal"))
}

export {Portal}