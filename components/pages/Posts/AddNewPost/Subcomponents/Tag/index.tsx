"use client";

import { CardWrapper, Body, Head } from "../Subcomponents/CardLayout";
import Tags from "./Tags";
import AddTag from "./AddTag";
import { useState } from "react";

const Tag = () => {
  const [isAddTagOpen, setIsAddTagOpen] = useState(false);
  return (
    <div>
      <CardWrapper>
        <Head heading="Tags" />
        <Body>
          <Tags />
          <button
            className="text-[var(--color-active3)] underline font-medium text-[13px]"
            onClick={() => setIsAddTagOpen(!isAddTagOpen)}
          >
            + Add New Tag
          </button>
          {isAddTagOpen && <AddTag />}
        </Body>
      </CardWrapper>
    </div>
  );
};

export default Tag;
