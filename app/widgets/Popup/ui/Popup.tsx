'use client';
import {FC, MouseEvent, ReactNode, useCallback, memo} from "react";
import styles from "./Popup.module.scss";
import classNames from "classnames";
import {XClose} from "@/shared/ui/XClose/XClose";
import {Button, ViewBtn} from "@/shared/ui/Button/Button";
import {Portal} from "@/shared/ui/Portal/Portal";

enum PopupType {
  NOTIFICATION = "Notification",
  WARNING = "Warning",
  ALERT = "Alert",
}

interface PopupProps{
  className?: string,
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void;
  type: PopupType,
}

const Popup: FC<PopupProps> = memo(({children, className, isOpen, onClose,  type}) => {

  const closePopup = useCallback((e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = (e.target as HTMLDivElement);
    const contain = target.classList.contains(styles.popup) || target.classList.contains(styles.popup__x_close) || target.classList.contains(styles.popup__btn);
    if(contain) onClose();
  },[onClose])

  return (
    <Portal>
      <div
        className={classNames("flex content-center items-center", styles.popup, { [styles["popup--open"]]: isOpen, [className]: !!className })}
        onClick={closePopup}
      >
        <div className={classNames(styles.popup__frame)}>
          <XClose callback={closePopup} className={styles.popup__x_close}/>
          <h5 className={styles.popup__h}>{type}</h5>
          <p className={styles.popup__span}>{children}</p>
          <div className={classNames("flex content-center", styles.popup__basement)}>
            <Button className={styles.popup__btn} callback={closePopup} view={ViewBtn.BLUEVIOLET}>OK</Button>
          </div>
        </div>
      </div>
    </Portal>
  )
});



export { Popup, PopupType };