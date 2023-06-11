import api_endpoints from "@/lib/ApiEndpoints";
import { publicClient } from "@/network/publicHttpClient";
import { TagGetResult } from "@type/Tag_APIs_Types";

const tagsApiCall = async () => {
  try {
    const url = api_endpoints.Tag_ALL_GET_API;
    const res = await publicClient.get<TagGetResult[]>(url);
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

export { tagsApiCall };
