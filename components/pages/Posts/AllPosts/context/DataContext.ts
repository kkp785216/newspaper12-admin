import { createContext } from "react";
import { PageDataType } from "./DataProvider";

const DataContext = createContext({} as PageDataType);

export { DataContext };
