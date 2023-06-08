import { adminClient } from "@/network/adminHttpClient";

const allAuthorsApicall = async () => {
  try {
    const res = await adminClient.getAllAuthors();
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

const logedInUser = async () => {
  try {
    const res = await adminClient.getMyProfile();
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

export { allAuthorsApicall, logedInUser };
