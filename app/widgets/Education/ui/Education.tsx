import {FC} from "react";
import styles from "./Education.module.scss";
import classNames from "classnames";

interface AspectEducation{
  img: string,
  title: string,
  desc: string,
}

interface EducationProps{
  title: string,
  educations: AspectEducation[]
}

const Education: FC<EducationProps> = ({title, educations}) => {
  return (
    <div className={styles.education}>
      <div className="container">
        <div className="flex direction-column">

          <h4 className={styles.education__h}>{title}</h4>

          <div className={classNames("flex content-center", styles.education__list)}>
            {educations.map((ed: AspectEducation, index: number) => (
              <div className={classNames("flex direction-column items-center", styles.education__node)} key={`${ed.img}-${index}`}>
                <div className={styles.education__picture}>
                  <img className={styles.education__img} src={`${process.env.API}/svg/${ed.img}`} alt="ico" />
                </div>
                <h5 className={styles.education__cap}>{ed.title}</h5>
                <span className={styles.education__span}>{ed.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export {Education};
export type {EducationProps}