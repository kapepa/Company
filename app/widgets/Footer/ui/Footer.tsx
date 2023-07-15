import {FC} from "react";
import styles from "./Footer.module.scss"
import {Logo} from "@/shared/ui/Logo/Logo";
import {CallLink} from "@/shared/ui/CallLink/CallLink";
import {MailTo} from "@/shared/ui/MailTo/MailTo";
import classNames from "classnames";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="flex direction-column items-center">
          <Logo className={styles.footer__logo}/>
          <span className={styles.footer__span}>Contact us</span>
          <div className={classNames("flex content-center", styles.footer__basement)}>
            <MailTo email="oocomp@gmail.com">oocomp@gmail.com</MailTo>
            <CallLink className={styles.footer__phone} phoneNumber="+38(050)000‑45‑67">(050)000‑45‑67</CallLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export {Footer};