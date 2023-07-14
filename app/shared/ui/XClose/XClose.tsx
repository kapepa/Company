import {FC, MouseEvent} from "react";
import styles from "./XClose.module.scss";
import classNames from "classnames";

interface XCloseProps {
  className?: string,
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
}

const XClose: FC<XCloseProps> = ({className, callback}) => {
  return (
    <button
      onClick={callback}
      className={classNames(styles.x_close, {[className]: !!className})}
    />
  )
}

export {XClose};