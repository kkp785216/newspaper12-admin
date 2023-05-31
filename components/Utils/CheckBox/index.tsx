import styles from "./index.module.css";

const CheckBox = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <label className={`${styles.label} ${className || ""}`}>
      <input value="1" type="checkbox" className={styles.input} /> {label}
    </label>
  );
};

export default CheckBox;
