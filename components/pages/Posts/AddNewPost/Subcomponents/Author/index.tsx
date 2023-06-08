import { Body, CardWrapper, Head } from "../Subcomponents/CardLayout";
import { allAuthorsApicall } from "./pageData";

const Author = async () => {
  // const [authors, rootUser] = await Promise.all([allAuthorsApicall(), logedInUser()]);
  const [authors] = await Promise.all([allAuthorsApicall()]);
  return (
    <CardWrapper>
      <Head heading="Author" />
      <Body>
        <select className="input select">
          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.firstName} {author.lastName}
            </option>
          ))}
        </select>
      </Body>
    </CardWrapper>
  );
};

export default Author;
