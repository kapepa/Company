'use client';
import {FC} from "react";
import styles from "./Request.module.scss";
import {Form, ViewForm} from "@/shared/ui/Form/Form";

interface RequestProps{
  title: string,
  subtitle: string,
}

const Request: FC<RequestProps> = ({title, subtitle}) => {
  return (
    <div className={styles.request}>
      <div className="container">
        <div className="flex direction-column">
          <h4 className={styles.request__h}>{title}</h4>
          <span className={styles.request__subtitle}>{subtitle}</span>
          <Form className={styles.request__form} view={ViewForm.BLUEVIOLET}/>
        </div>
      </div>
    </div>
  )
}

export {Request, RequestProps};

