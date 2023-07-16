import {FC, InputHTMLAttributes} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import {UseFormRegisterReturn} from "react-hook-form/dist/types/form";

enum InputView {
  BLUEVIOLET = "blueviolet",
  WHITE = "white"
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  className?: string,
  view: typeof InputView,
  errors?: string | undefined,
  register?: UseFormRegisterReturn<string>;
}

const Input: FC<InputProps> = ({className, view, errors, register, ...otherProps}) => {
  return (
    <div className={styles.input__wrapper}>
      <input
        className={classNames(styles.input, {[className]: !!className})}
        {...register}
        {...otherProps}
      />
      {errors && <span className={styles.input__warning}>{errors}</span>}
    </div>
  )
}

export {Input, InputView}