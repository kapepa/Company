'use client';

import {ButtonHTMLAttributes, FC, ReactNode, MouseEvent, memo} from "react";
import style from "./Button.module.scss"
import classNames from "classnames";

enum ViewBtn {
  BLUEVIOLET = "blueviolet",
  WHITE = "white"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  children: ReactNode,
  callback?: (e: MouseEvent<HTMLButtonElement>) => void,
  view: ViewBtn,
  disabled?: boolean
}

const Button: FC<ButtonProps> = memo(({ children, className, callback, view, disabled = false, ...props}) => {
  return (
    <button
      className={classNames(style.btn, style[`btn--${view}`], { [!!className ? className : ""]: !!className })}
      onClick={callback}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button";

export {Button, ViewBtn};