import {FC} from "react";
import styles from "./Histories.module.scss";
import classNames from "classnames";

interface HistoriesText {
  img: string,
  text: string[],
}

export interface HistoriesProps {
  title: string,
  histories: HistoriesText[],
}

const Histories: FC<HistoriesProps> = ({title, histories}) => {
  return (
    <div className={styles.histories}>
      <div className="container">
        <div className={classNames("flex direction-column", styles.histories__area)}>

          {histories.map((his:HistoriesText, index: number) =>
            <div className={classNames("flex", styles.histories__story, {['direction-row-reverse']: index > 0})} key={`${his.img}-${index}`}>
              <article className={classNames("flex direction-column", styles.histories__article)}>
                {index === 0 && <h3 className={styles.histories__h}>{title}</h3>}
                <div className={classNames("flex direction-column", styles.histories__slice, { ["content-center"]: index > 0 })}>
                  {his.text.map((str: string, index: number) => <p key={`${str}-${index}`} className={styles.histories__text}>{str}</p>)}
                </div>
              </article>
              <div className={classNames("flex items-center content-center", styles.histories__substrate)}>
                <img className={styles.histories__image} src={`${process.env.API}/images/${his.img}`} alt={"story img"} />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export {Histories};