"use client";

import { ChangeEvent, useState } from "react";
import { AddPostContext } from "./addPostContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
  });

  const formDataDispatch = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const value = {
    formData,
    formDataDispatch,
  };

  return (
    <AddPostContext.Provider value={value}>{children}</AddPostContext.Provider>
  );
};

export { Provider };
