"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  btntype: "fill" | "lite";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton = ({ children, className, btntype, ...props }: Props) => {
  return (
    <button
      className={`${className || ""} ${
        btntype === "fill" ? styles.btnFill : styles.btnLite
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
