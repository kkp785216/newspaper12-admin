import React from "react";
import IconPostcardFill from "./assets/IconPostcardFill";
import SliderMenu from "../Subcomponents/SliderMenu";
import ChildMenu from "../Subcomponents/SliderMenu/ChildMenu";
import { usePathname } from "next/navigation";

const Posts = () => {
  // router.route
  const pathname = usePathname();
  return (
    <SliderMenu
      active={pathname === "/posts/all-posts" || pathname === "/posts/add-new"}
      href="/posts/all-posts"
      title="Posts"
      MenuImage={IconPostcardFill}
    >
      <ChildMenu
        active={pathname === "/posts/all-posts"}
        href="/posts/all-posts"
        title="All Posts"
      />
      <ChildMenu
        active={pathname === "/posts/add-new"}
        href="/posts/add-new"
        title="Add New"
      />
    </SliderMenu>
  );
};

export default Posts;
