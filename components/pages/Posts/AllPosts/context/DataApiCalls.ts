/** API Calls */
import { getAllArticlesApiCall } from "../pageData";

const articlesData = async () => {
  const [articles] = await Promise.all([getAllArticlesApiCall()]);
  return {
    articles,
  };
};

const pageDataApiCalls = async () => {
  return await Promise.all([articlesData()]);
};

export { pageDataApiCalls };
