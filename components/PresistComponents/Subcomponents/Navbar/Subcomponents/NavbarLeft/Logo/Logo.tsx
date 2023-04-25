import React from "react";
import Link from "next/link";
import IconHome from "./assets/IconHome";

const Logo = () => {
  return (
    <div className="flex items-center group hover:text-[var(--color-active2)]">
      <IconHome className="mr-1 text-[var(--svg-primary)] group-hover:text-inherit" />
      <Link href="/">Newspaper</Link>
    </div>
  );
};

export default Logo;
