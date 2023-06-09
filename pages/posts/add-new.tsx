import Head from "next/head";
import AddNewPost from "@pagesComps/Posts/AddNewPost";
import { GetServerSideProps } from "next";
import { pageDataApiCalls } from "@pagesComps/Posts/AddNewPost/_context/DataApiCalls";
import {
  PageDataType,
  DataProvider,
} from "@pagesComps/Posts/AddNewPost/_context/DataProvider";
import { wrapper } from "@/redux/store";
import { redirectToLoginPage } from "@/redux/auth/helper/redirectToLoginPage";

type Props = {
  pageData: PageDataType;
};
const AddNew = ({ pageData }: Props) => {
  return (
    <div>
      <Head>
        <title>Newspaper - Add New Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataProvider pageData={pageData}>
        <AddNewPost />
      </DataProvider>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  pageData: PageDataType;
}> = wrapper.getServerSideProps((store) => async () => {
  /** Redirect un-authenticated user into login page */
  const willRedirect = redirectToLoginPage(store);
  if (willRedirect) {
    return willRedirect;
  }

  const [authorsData, categoriesData, tagsData] = await pageDataApiCalls();

  return {
    props: {
      pageData: {
        authorsData,
        categoriesData,
        tagsData,
      },
    },
  };
});

export default AddNew;
