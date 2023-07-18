import {FC} from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";

interface InfoProps {
  counter: number,
  letter: string,
}

interface HomeProps {
  title: string,
  img: string,
  info: InfoProps[],
}

const Header: FC<HomeProps> = ({title, info, img}) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={classNames("flex content-center", styles.header__area)}>

          <div className={styles.header__substrate}>
            <img width={770} height={490} className={styles.header__picture} src={`${process.env.API}/images/${img}`} alt="header img"/>
          </div>

          <div className={classNames("flex direction-column", styles.header__details)}>
            <h1 className={styles.header__h}>{title}</h1>

            <div className={classNames("flex direction-column", styles.header__info)}>

              {info.map((cell: InfoProps, index: number) => (
                <div className={classNames("flex direction-column", styles.header__cell)} key={`${cell.counter}-${index}`}>
                  <span className={styles.header__counter}>{cell.counter}+</span>
                  <span className={styles.header__letter}>{cell.letter}</span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </header>
  )
};

export {Header};
export type {HomeProps};