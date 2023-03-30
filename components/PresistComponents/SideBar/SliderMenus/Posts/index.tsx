import React from "react";
import IconPostcardFill from "./assets/IconPostcardFill";
import SliderMenu from "../Subcomponents/SliderMenu";
import ChildMenu from "../Subcomponents/SliderMenu/ChildMenu";
import { useRouter } from "next/router";

const Posts = () => {
  // router.route
  const { route } = useRouter();
  return (
    <SliderMenu
      active={route === "/posts/all-posts" || route === "/posts/add-new"}
      href="/posts/all-posts"
      title="Posts"
      MenuImage={IconPostcardFill}
    >
      <ChildMenu
        active={route === "/posts/all-posts"}
        href="/posts/all-posts"
        title="All Posts"
      />
      <ChildMenu
        active={route === "/posts/add-new"}
        href="/posts/add-new"
        title="Add New"
      />
    </SliderMenu>
  );
};

export default Posts;
