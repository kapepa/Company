import {FC, ReactNode} from "react";
import styles from "./AnchorLink.module.scss";
import Link from "next/link";
import classNames from "classnames";

interface AnchorLink extends HTMLAnchorElement{
  href: string,
  className?: string,
  children: ReactNode,
}

const AnchorLink: FC = ({href, children, className, ...other}) => {
  return (
    <Link className={`${styles.link} ${classNames({[className]: !!className} )}`} href={href} {...other}>{children}</Link>
  )
}

export {AnchorLink};