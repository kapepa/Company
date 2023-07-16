'use client';
import {FC} from "react";
import styles from "./Form.module.scss";
import {Button, ViewBtn} from "@/shared/ui/Button/Button";
import classNames from "classnames";
import {Input, InputView} from "@/shared/ui/Input/Input";
import {useForm} from "react-hook-form";
import {ContactInfo} from "@/widgets/Request/ui/Request";


enum ViewForm {
  BLUEVIOLET = "blueviolet",
  WHITE = "white"
}

interface FormProps{
  className?: string,
  view: typeof ViewForm,
  callback(data: ContactInfo): Promise<any>;
}

const Form: FC<FormProps> = ({className, view, callback}) => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data: ContactInfo) => {
    callback(data).then(() => reset());
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames("flex direction-column items-center", styles.form, styles[`form--${view}`], {[className]: !!className})}
    >
      <div className={classNames("flex direction-column", styles.form__interaction)}>
        <Input
          className={styles.form__input}
          type="text"
          view={InputView.WHITE}
          placeholder="Your Name"
          maxLength={40}
          register={register("name", {
            required: { value: true, message: "Name is required" },
            minLength: { value: 3, message: "Min length is 3"}
          })}
          errors={errors.name && errors.name?.message}
        />

        <Input
          className={styles.form__input}
          type="email"
          view={InputView.WHITE}
          placeholder="Your email"
          maxLength={40}
          register={register("mail", {
            required: { value: true, message: "Email Address is required" },
            pattern: { value: /\S+@\S+\.\S+/, message: "Entered value does not match email format"},
          })}
          errors={errors.mail && errors.mail?.message}
        />

      </div>
      <div className={classNames("flex content-center", styles.form__basement)}>
        <Button className={styles.form__btn} view={ViewBtn.WHITE} type="submit">Submit</Button>
      </div>
    </form>
  )
}

export {Form, ViewForm};