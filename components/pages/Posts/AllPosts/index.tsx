import { getAllArticlesData } from "./pageData";

const AllPosts = async () => {
  const { articles } = await getAllArticlesData();
  return (
    <div>
      {articles.map((e) => (
        <span key={e.url}>
          {e.title}
          <br />
        </span>
      ))}
    </div>
  );
};

export default AllPosts;
