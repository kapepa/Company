import {FC} from "react";
import styles from "./Nav.module.scss";
import {AnchorLink} from "@/shared/ui/AnchorLink/AnchorLink";
import { usePathname } from 'next/navigation';
import classNames from "classnames";

enum NavPath {
  HOME = "/home",
  BLOG = "/blog",
  NEWS = "/news",
  ABOUT = "/about",
}

const Nav: FC = () => {
  const currentRoute = usePathname();

  const activeLink = (path: typeof NavPath) : boolean => {
    return path === currentRoute;
  }

  return (
    <nav className={`flex content-between ${styles.nav}`}>
      <AnchorLink className={classNames(styles.nav__link, {[styles["nav__link--active"]]: activeLink(NavPath.HOME)})} href={NavPath.HOME}>
        Home
      </AnchorLink>
      <AnchorLink className={classNames(styles.nav__link, {[styles["nav__link--active"]]: activeLink(NavPath.BLOG)})} href={NavPath.BLOG}>
        Blog
      </AnchorLink>
      <AnchorLink className={classNames(styles.nav__link, {[styles["nav__link--active"]]: activeLink(NavPath.NEWS)})} href={NavPath.NEWS}>
        News
      </AnchorLink>
      <AnchorLink className={classNames(styles.nav__link, {[styles["nav__link--active"]]: activeLink(NavPath.ABOUT)})} href={NavPath.ABOUT}>
        About
      </AnchorLink>
    </nav>
  )
}

export {Nav, NavPath}