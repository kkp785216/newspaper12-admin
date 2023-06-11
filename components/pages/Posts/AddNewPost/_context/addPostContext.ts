import { createContext } from "react";
import { AddPostContextValueType } from "./Provider";

const AddPostContext = createContext({} as AddPostContextValueType);

export { AddPostContext };
