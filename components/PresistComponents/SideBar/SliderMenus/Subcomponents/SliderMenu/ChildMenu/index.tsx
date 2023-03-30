import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  active: boolean;
  title: string;
  href: string;
};

const ChildMenu = ({ active, title, href }: Props) => {
  return (
    <Link
      href={href}
      className={`block px-3 py-1 relative ${styles.child} ${
        active ? styles.active : ""
      }`}
    >
      <span>{title}</span>
    </Link>
  );
};

export default ChildMenu;
