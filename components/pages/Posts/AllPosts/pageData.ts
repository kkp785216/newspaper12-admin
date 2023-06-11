import api_endpoints from "@lib/ApiEndpoints";
import { publicClient } from "@network/publicHttpClient";
import { ArticleAllGetResult } from "@type/Article_APIs_Types";

const getAllArticlesApiCall = async () => {
  try {
    const url = api_endpoints.ARTICLES_ALL_GET_API;
    const data = await publicClient.get<ArticleAllGetResult>(url);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export { getAllArticlesApiCall };
