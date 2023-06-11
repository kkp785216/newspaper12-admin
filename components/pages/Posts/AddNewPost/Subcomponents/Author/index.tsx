import { AddPostContext } from "../../_context/addPostContext";
import { DataContext } from "../../_context/DataContext";
import { Body, CardWrapper, Head } from "../Subcomponents/CardLayout";
import { useContext, useEffect } from "react";

const Author = () => {
  const {
    authorsData: { authors, rootUser },
  } = useContext(DataContext);
  const { postDispatch } = useContext(AddPostContext);
  const defaultUser = authors.find((e) => e._id === rootUser._id);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    postDispatch({
      type: "author",
      payload: event.target.value,
    });
  };

  useEffect(() => {
    defaultUser &&
      postDispatch({
        type: "author",
        payload: defaultUser._id,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardWrapper>
      <Head heading="Author" />
      <Body>
        <select
          className="input select"
          defaultValue={defaultUser?._id}
          onChange={handleChange}
        >
          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.firstName} {author.lastName}{" "}
              {author._id === defaultUser?._id ? "(root)" : ""}
            </option>
          ))}
        </select>
      </Body>
    </CardWrapper>
  );
};

export default Author;
