import {FC} from "react";
import styles from "./Problems.module.scss";
import classNames from "classnames";

interface ProblemsProps {
  title: string,
  subtitle: string,
  list: string[],
}

const Problems: FC<ProblemsProps> = ({title, subtitle, list}) => {
  return (
    <div className={styles.problems}>
      <div className="container">
        <div className="flex direction-column">

          <h5 className={styles.problems__h}>{title}</h5>
          <span className={styles.problems__subtitle}>{subtitle}</span>

          <div className={classNames("flex direction-column", styles.problems__list)}>
            {list.map((text: string, index: number) => (
              <div className={classNames("flex items-center", styles.problems__cell)} key={`${text}-${index}`}>
                <div>
                  <div className={classNames("flex content-center items-center", styles.problems__int)}>{index + 1}</div>
                </div>
                <span className={styles.problems__text}>{text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export {Problems, ProblemsProps};