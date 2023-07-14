import {FC, ReactNode} from "react";
import styles from "./Error.module.scss";
import classNames from "classnames";

interface ErrorProp {
  children: ReactNode,
}

const Error: FC<ErrorProp> = ({children}) => {
  return (
    <div className={classNames("flex content-center items-center", styles.error)}>
      <div>
        <span className={styles.error__span}>Oops!</span>
        <span className={styles.error__span}>{children}</span>
      </div>
    </div>
  )
}

export {Error};