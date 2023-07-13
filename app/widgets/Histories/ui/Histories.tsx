import {FC} from "react";
import styles from "./Histories.module.scss";

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
        <div className={styles.histories__area}>

          {histories.map((his:HistoriesText, index: number) =>
            <div className={styles.histories__template} key={`${his.img}-${index}`}>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export {Histories};