import {FC} from "react";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={styles["lds-ripple"]}>
      <div/>
      <div/>
    </div>
  )
}

export {Loader};