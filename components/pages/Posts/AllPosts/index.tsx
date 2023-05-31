import Link from "next/link";
import { getAllArticlesData } from "./pageData";

const AllPosts = async () => {
  const { articles } = await getAllArticlesData();
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
