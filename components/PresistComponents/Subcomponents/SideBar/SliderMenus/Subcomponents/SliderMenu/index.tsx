import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  active: boolean;
  title: string;
  href: string;
  MenuImage: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  children?: React.ReactNode;
};

const SliderMenu = ({ active, title, href, MenuImage, children }: Props) => {
  return (
    <div className={`relative ${styles.container}`}>
      <Link
        href={href}
        className={`flex items-center px-3 group py-2 relative text-sm ${
          styles.menu
        } ${active ? styles.active : ""} ${children ? styles.haveChild : ""}`}
      >
        <MenuImage
          className="mr-3 text-[var(--svg-primary)] group-hover:text-inherit text-lg"
          style={active ? { color: "inherit" } : {}}
        />
        <span>{title}</span>
      </Link>
      {children && (
        <div
          className={`py-2 ${styles.childContainer} ${
            active ? styles.active : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SliderMenu;
