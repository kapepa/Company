'use client';
import {FC, MouseEvent, useCallback} from "react";
import styles from "./Suggestion.module.scss";
import {Button, ViewBtn} from "@/shared/ui/Button/Button";
import {UsePopup} from "@/context/Popup/ui/UsePopup";
import {PopupType} from "@/widgets/Popup/ui/Popup";
import {OpenCallbackProps} from "@/context/Popup/lib/PopupContext";

interface SuggestionProps {
  title: string,
  desc: string,
}

interface RequestProps {
  answer: string
}

const Suggestion: FC<SuggestionProps> = ({title, desc}) => {
  const { open, isOpened } = UsePopup();

  const onSuggest = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    fetch(`${process.env.API}/api/suggestion/answer`,{
      method: "GET", cache: 'no-store',
    })
      .then((res) => res.json())
      .then((data: RequestProps) => isOpened<OpenCallbackProps>({notification: data.answer, type: PopupType.NOTIFICATION}))
      .catch((err: Error) => isOpened<OpenCallbackProps>({notification: err.message, type: PopupType.WARNING}));
  }, [open])

  return (
    <div className={styles.suggestion}>
      <div className="container">
        <div className="flex direction-column items-center">
          <h4 className={styles.suggestion__h}>{title}</h4>
          <article className={styles.suggestion__article}>{desc}</article>
          <Button className={styles.suggestion__btn} view={ViewBtn.BLUEVIOLET} callback={onSuggest}>Lorem Ipsum</Button>
        </div>
      </div>
    </div>
  )
}

export {Suggestion, SuggestionProps}