import {FC} from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import {NavPath} from "@/shared/ui/Nav/Nav";
import classNames from "classnames";

interface LogoProps {
  className?: string,
}

const Logo: FC<LogoProps> = ({className}) => {
  return  <Link className={classNames(styles.logo, {[className]: !!className})} href={NavPath.HOME}>Company</Link>
}

export {Logo};