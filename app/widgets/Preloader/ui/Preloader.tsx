import {FC} from "react";
import styles from "./Preloader.module.scss";
import {Loader} from "@/shared/ui/Loader/Loader";
import classNames from "classnames";

const Preloader: FC = () => {
  return (
    <div className={classNames("flex content-center items-center", styles.preloader)}>
      <Loader/>
    </div>
  )
}

export {Preloader};