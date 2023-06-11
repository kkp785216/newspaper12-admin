"use client";

import { useState } from "react";
import AddNewCategory from "./AddNewCategory/indexd";
import { CategoryGetResult } from "@type/Category_APIs_Type";

type Props = {
  categories: CategoryGetResult[];
};

const AddCategory = ({ categories }: Props) => {
  const [isAddCategoryOpen, setIsAddCategoyOpen] = useState(false);
  return (
    <>
      <button
        className="text-[var(--color-active3)] underline font-medium text-[13px]"
        onClick={() => setIsAddCategoyOpen(!isAddCategoryOpen)}
      >
        + Add New Category
      </button>
      {isAddCategoryOpen && <AddNewCategory categories={categories} />}
    </>
  );
};

export default AddCategory;
