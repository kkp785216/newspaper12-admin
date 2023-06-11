import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

type Props = {
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckBox = ({ label, className, ...props }: Props) => {
  return (
    <label className={`${styles.label} ${className || ""}`}>
      <input value="1" type="checkbox" className={styles.input} {...props} />{" "}
      {label}
    </label>
  );
};

export default CheckBox;
