import { ChangeEvent, createContext } from "react";

type AddPostContextType = {
  formData: {
    title: string;
    slug: string;
    description: string;
  };
  formDataDispatch: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AddPostContext = createContext<AddPostContextType>({
  formData: {
    title: "",
    slug: "",
    description: "",
  },
  formDataDispatch: () => null,
});

export { AddPostContext };
