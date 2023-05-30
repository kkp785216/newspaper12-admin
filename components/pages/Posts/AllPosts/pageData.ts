import api_endpoints from "@lib/ApiEndpoints";
import { publicHttpClient } from "@network/publicHttpClient";
import { ArticleAllGetResult } from "@/type/Article_APIs_Types";

const getAllArticlesData = async () => {
  const endpoint = api_endpoints.ARTICLES_ALL_GET_API;
  const data = await publicHttpClient.get<ArticleAllGetResult>(endpoint);
  return data;
};

export { getAllArticlesData };
