"use client";

import CheckBox from "@/components/Utils/CheckBox";
import { CategoryGetResult } from "@type/Category_APIs_Type";
import { useContext } from "react";
import { AddPostContext } from "../../../_context/addPostContext";

type Props = {
  categories: CategoryGetResult[];
};

const Categories = ({ categories: categoriesData }: Props) => {
  const { postDispatch } = useContext(AddPostContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      postDispatch({ type: "categories-add", payload: event.target.value });
    } else {
      postDispatch({ type: "categories-remove", payload: event.target.value });
    }
  };
  return (
    <div className="py-3">
      <div className="space-y-1">
        {categoriesData.map((category) => (
          <CheckBox
            key={category._id}
            onChange={handleChange}
            value={category._id}
            label={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
