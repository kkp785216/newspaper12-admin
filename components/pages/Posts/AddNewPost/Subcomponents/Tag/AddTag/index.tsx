"use client";

import { useState } from "react";
import AddNewTag from "./AddNewTag/indexd";

const AddTag = () => {
  const [isAddTagOpen, setIsAddTagOpen] = useState(false);
  return (
    <>
      <button
        className="text-[var(--color-active3)] underline font-medium text-[13px]"
        onClick={() => setIsAddTagOpen(!isAddTagOpen)}
      >
        + Add New Tag
      </button>
      {isAddTagOpen && <AddNewTag />}
    </>
  );
};

export default AddTag;
