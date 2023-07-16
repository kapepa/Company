'use client';
import {FC, memo, ReactNode, useCallback, useMemo, useState} from "react";
import {OpenCallbackProps, PopupContext, PopupContextProps} from "@/context/Popup/lib/PopupContext";
import {Popup, PopupType} from "@/widgets/Popup/ui/Popup";

interface PopupProviderProps{
  children: ReactNode,
}

const PopupProvider: FC<PopupProviderProps> = memo(({children}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [props, setProps] = useState<OpenCallbackProps>();

  const togglePopup = useCallback((props: OpenCallbackProps) => {
    setProps(props);
    setOpen(true);
  }, [open, props?.type]);

  const defaultProps = useMemo<PopupContextProps>(() => ({ open: false, isOpened: togglePopup }),[open])

  return (
    <PopupContext.Provider value={defaultProps}>
      <Popup isOpen={open} onClose={() => setOpen(false)} type={ !!props?.type ? props.type : PopupType.NOTIFICATION }>
        {props?.notification}
      </Popup>
      {children}
    </PopupContext.Provider>
  )
});

export {PopupProvider};