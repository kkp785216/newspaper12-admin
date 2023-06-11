import { adminClient } from "@/network/adminHttpClient";

const allAuthorsApiCall = async () => {
  try {
    const res = await adminClient.getAllAuthors();
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

const logedInUserApiCall = async () => {
  try {
    const res = await adminClient.getMyProfile();
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

export { allAuthorsApiCall, logedInUserApiCall };
