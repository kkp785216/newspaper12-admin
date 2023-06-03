import Link from "next/link";
import { getAllArticlesData } from "./pageData";
import { use } from "react";

const AllPosts = () => {
  const { articles } = use(getAllArticlesData());
  return (
    <div>
      {articles.map((e) => (
        <>
          <Link key={e.url} href={`/posts/add-new`}>
            {e.title}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
};

export default AllPosts;
