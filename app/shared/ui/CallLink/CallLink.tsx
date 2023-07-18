import {FC, ReactNode} from "react";
import styles from "./CallLink.module.scss";
import classNames from "classnames";
import CallIco from "../../assets/svg/ic_baseline-phone.svg"
import Image from "next/image";

interface CallLinkProps {
  children: ReactNode,
  className?: string,
  phoneNumber: string,
}

const CallLink: FC<CallLinkProps> = ({children, className, phoneNumber}) => {
  return (
    <a
      className={classNames("flex content-between items-center", styles["call-link"], {[!!className ? className : ""]: !!className} )}
      href={`tel:${phoneNumber}`}
    >
      <Image className={styles["call-link__ico"]} src={CallIco} alt="phone" />
      <span className={classNames(styles["call-link__span"], {[!!className ? className : ""]: !!className})}>{children}</span>
    </a>
  );
}

export {CallLink};