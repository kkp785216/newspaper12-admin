/** API Calls */
import {
  allAuthorsApiCall,
  logedInUserApiCall,
} from "@pagesComps/Posts/AddNewPost/Subcomponents/Author/pageData";
import { categoriesApiCall } from "../Subcomponents/Category/pageData";
import { tagsApiCall } from "../Subcomponents/Tag/pageData";

const authorsData = async () => {
  const [authors, rootUser] = await Promise.all([
    allAuthorsApiCall(),
    logedInUserApiCall(),
  ]);
  return {
    authors,
    rootUser,
  };
};

const categoriesData = async () => {
  const [categories] = await Promise.all([categoriesApiCall()]);
  return { categories };
};

const tagsData = async () => {
  const [tags] = await Promise.all([tagsApiCall()]);
  return { tags };
};

const pageDataApiCalls = async () => {
  return await Promise.all([authorsData(), categoriesData(), tagsData()]);
};

export { pageDataApiCalls };
