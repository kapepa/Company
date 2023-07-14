'use client';
import {FC, MouseEvent, useCallback, useEffect, useState} from "react";
import styles from "./Suggestion.module.scss";
import {Button, ViewBtn} from "@/shared/ui/Button/Button";
import {Popup, PopupType} from "@/widgets/Popup/ui/Popup";

interface SuggestionProps {
  title: string,
  desc: string,
}

interface RequestProps {
  answer: string
}

const Suggestion: FC<SuggestionProps> = ({title, desc}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>();

  const onAppearPopup = (message: string) => {
    setAnswer(message);
    setOpen(true);
  }

  const onSuggest = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    fetch("http://localhost:5000/api/suggestion/answer",{
      method: "GET", cache: 'no-store',
    })
      .then((res) => res.json())
      .then((data: RequestProps) => onAppearPopup(data.answer))
      .catch((err: Error) => onAppearPopup(err.message));
  }, [open])

  useEffect(() => {
    return () => {
      setAnswer(null);
      setOpen(false);
    }
  }, [])

  return (
    <>
      <Popup isOpen={open} onClose={() => setOpen(false)} type={PopupType.NOTIFICATION}>
        {answer}
      </Popup>
      <div className={styles.suggestion}>
        <div className="container">
          <div className="flex direction-column items-center">
            <h4 className={styles.suggestion__h}>{title}</h4>
            <article className={styles.suggestion__article}>{desc}</article>
            <Button className={styles.suggestion__btn} view={ViewBtn.BLUEVIOLET} callback={onSuggest}>Lorem Ipsum</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export {Suggestion, SuggestionProps}