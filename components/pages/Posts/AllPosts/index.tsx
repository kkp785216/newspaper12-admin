import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

const AllPosts = () => {
  const {
    articlesData: { articles },
  } = useContext(DataContext);
  return (
    <div>
      {articles.articles.map((article) => (
        <>
          <Link key={article.url} href={`/posts/add-new`}>
            {article.title}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
};

export default AllPosts;
