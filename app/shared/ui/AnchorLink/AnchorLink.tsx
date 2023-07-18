import {FC, ReactNode, memo} from "react";
import styles from "./AnchorLink.module.scss";
import Link from "next/link";
import classNames from "classnames";

interface AnchorLink{
  href: string,
  className?: string,
  children: ReactNode,
}

const AnchorLink: FC<AnchorLink> = memo(({href, children, className, ...other}) => {
  return (
    <Link className={classNames(styles.link, {[!!className ? className : ""]: !!className} )} href={href} {...other}>{children}</Link>
  )
})

AnchorLink.displayName = "AnchorLink";

export {AnchorLink};