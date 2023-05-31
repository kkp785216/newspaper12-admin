"use client";

import { useContext } from "react";
import { AddPostContext } from "../../_context/addPostContext";

const Title = () => {
  const {
    formData: { title },
    formDataDispatch,
  } = useContext(AddPostContext);
  return (
    <div>
      <input
        onChange={formDataDispatch}
        value={title}
        className="input"
        style={{ fontSize: "21px" }}
        type="text"
        name="title"
        placeholder="Add title"
        required
        minLength={3}
        maxLength={150}
      />
    </div>
  );
};

export default Title;
