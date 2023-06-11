import { UserProfileResponse } from "@type/Auth_APIs_Types";
import { DataContext } from "./DataContext";
import { CategoryGetResult } from "@type/Category_APIs_Type";
import { TagGetResult } from "@type/Tag_APIs_Types";

type Props = {
  children: React.ReactNode;
  /* Page Data */
  pageData: {
    authorsData: {
      authors: UserProfileResponse[];
      rootUser: UserProfileResponse;
    };
    categoriesData: {
      categories: CategoryGetResult[];
    };
    tagsData: {
      tags: TagGetResult[];
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
