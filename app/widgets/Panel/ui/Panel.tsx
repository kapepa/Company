"use client";
import {FC} from "react";
import styles from "./Panel.module.scss";
import {Nav} from "@/shared/ui/Nav/Nav";
import {Logo} from "@/shared/ui/Logo/Logo";
import {CallLink} from "@/shared/ui/CallLink/CallLink";
import classNames from "classnames";

const Panel: FC = () => {
  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={classNames("flex content-between items-center", styles.panel__area)}>
          <Logo/>
          <Nav/>
          <CallLink phoneNumber="+38(050)000‑45‑67">(050)000‑45‑67</CallLink>
        </div>
      </div>
    </div>
  )
}

export default Panel;