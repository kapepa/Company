import {FC, ReactNode} from "react";
import styles from "./MailTo.module.scss";
import Envelope from "../../assets/svg/envelope.svg";
import classNames from "classnames";
import CallIco from "@/shared/assets/svg/ic_baseline-phone.svg";
import Image from "next/image";

interface MailToProps {
  className?: string,
  children: ReactNode,
  email: string,
}

const MailTo: FC<MailToProps> = ({className, email, children}) => {
  return (
    <a
      className={classNames("flex content-between items-center", styles.mail, {[className]: !!className} )}
      href={`mailto:${email}`}
      target="_top"
    >
      <Image src={Envelope} alt="phone" />
      <span className={classNames(styles.mail__span, {[className]: !!className})}>{children}</span>
    </a>
  )
}

export {MailTo};