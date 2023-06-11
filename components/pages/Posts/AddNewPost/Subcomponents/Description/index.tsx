"use client";
import { useContext } from "react";
import { AddPostContext } from "../../_context/addPostContext";

type Props = {
  className?: string;
};

const Description = ({ className }: Props) => {
  const { formData, formDataDispatch } = useContext(AddPostContext);
  return (
    <div>
      <textarea
        className={`input resize-none placeholder:text-[21px] ${
          className || ""
        }`}
        style={{ fontSize: "18px" }}
        cols={30}
        rows={4}
        name="description"
        onChange={formDataDispatch}
        value={formData.description}
        placeholder="Description"
      ></textarea>
    </div>
  );
};

export default Description;
