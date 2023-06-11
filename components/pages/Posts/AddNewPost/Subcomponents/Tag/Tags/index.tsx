"use client";

import CheckBox from "@/components/Utils/CheckBox";
import { useContext } from "react";
import { AddPostContext } from "../../../_context/addPostContext";
import { TagGetResult } from "@type/Tag_APIs_Types";

type Props = {
  tags: TagGetResult[];
};

const Tags = ({ tags: tagsData }: Props) => {
  const { postDispatch } = useContext(AddPostContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      postDispatch({ type: "tags-add", payload: event.target.value });
    } else {
      postDispatch({ type: "tags-remove", payload: event.target.value });
    }
  };
  return (
    <div className="py-3">
      <div className="space-y-1">
        {tagsData.map((tag) => (
          <CheckBox
            key={tag._id}
            onChange={handleChange}
            value={tag._id}
            label={tag.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
