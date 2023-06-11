import { DataContext } from "../../_context/DataContext";
import { CardWrapper, Body, Head } from "../Subcomponents/CardLayout";
import AddTag from "./AddTag";
import { useContext } from "react";
import Tags from "./Tags";

const Tag = () => {
  const {
    tagsData: { tags },
  } = useContext(DataContext);
  return (
    <div>
      <CardWrapper>
        <Head heading="Tags" />
        <Body>
          <Tags tags={tags} />
          <AddTag />
        </Body>
      </CardWrapper>
    </div>
  );
};

export default Tag;
