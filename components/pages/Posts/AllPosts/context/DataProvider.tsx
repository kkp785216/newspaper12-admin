import { DataContext } from "./DataContext";
import { ArticleAllGetResult } from "@type/Article_APIs_Types";

type Props = {
  children: React.ReactNode;
  /* Page Data */
  pageData: {
    articlesData: {
      articles: ArticleAllGetResult;
    };
  };
};

type PageDataType = Props["pageData"];

const DataProvider = ({ children, pageData }: Props) => {
  return (
    <DataContext.Provider value={{ ...pageData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };
export type { PageDataType };
