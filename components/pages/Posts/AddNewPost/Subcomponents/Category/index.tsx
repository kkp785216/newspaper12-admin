"use client";

import { CardWrapper, Body, Head } from "../Subcomponents/CardLayout";
import Categories from "./Categories";
import AddCategory from "./AddCategory";
import { useState } from "react";

const Category = () => {
  const [isAddCategoryOpen, setIsAddCategoyOpen] = useState(false);
  return (
    <div>
      <CardWrapper>
        <Head heading="Categories" />
        <Body>
          {/* @ts-expect-error Server Component */}
          <Categories />
          <button
            className="text-[var(--color-active3)] underline font-medium text-[13px]"
            onClick={() => setIsAddCategoyOpen(!isAddCategoryOpen)}
          >
            + Add New Category
          </button>
          {isAddCategoryOpen && <AddCategory />}
        </Body>
      </CardWrapper>
    </div>
  );
};

export default Category;
