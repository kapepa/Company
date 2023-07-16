'use client';
import {FC, useCallback} from "react";
import styles from "./Request.module.scss";
import {Form, ViewForm} from "@/shared/ui/Form/Form";
import {UsePopup} from "@/context/Popup/ui/UsePopup";
import {PopupType} from "@/widgets/Popup/ui/Popup";
import {OpenCallbackProps} from "@/context/Popup/lib/PopupContext";

interface ContactInfo {
  name: string,
  mail: string,
}

interface RequestProps{
  title: string,
  subtitle: string,
}

const Request: FC<RequestProps> = ({title, subtitle}) => {
  const { open, isOpened } = UsePopup();

  const confirmed = useCallback(async (data: any) => {
    return fetch(
      `${process.env.API}/api/request/create`,
      {
        method: 'POST',
        cache: 'no-store',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      },
    )
      .then(res => res.json())
      .then((text: string) => isOpened<OpenCallbackProps>({notification: text, type: PopupType.NOTIFICATION}))
      .catch((err: Error) => isOpened<OpenCallbackProps>({notification: err.message, type: PopupType.WARNING}))
  },[open])

  return (
    <div className={styles.request}>
      <div className="container">
        <div className="flex direction-column">
          <h4 className={styles.request__h}>{title}</h4>
          <span className={styles.request__subtitle}>{subtitle}</span>
          <Form className={styles.request__form} view={ViewForm.BLUEVIOLET} callback={confirmed}/>
        </div>
      </div>
    </div>
  )
}

export {Request, RequestProps, ContactInfo};

