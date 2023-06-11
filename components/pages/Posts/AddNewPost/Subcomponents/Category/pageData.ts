import api_endpoints from "@/lib/ApiEndpoints";
import { publicClient } from "@/network/publicHttpClient";
import { CategoryGetResult } from "@type/Category_APIs_Type";

const categoriesApiCall = async () => {
  try {
    const url = api_endpoints.CATEGORY_ALL_GET_API;
    const res = await publicClient.get<CategoryGetResult[]>(url);
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

export { categoriesApiCall };
