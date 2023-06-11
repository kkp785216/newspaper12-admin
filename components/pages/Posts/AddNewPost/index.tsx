import Author from "./Subcomponents/Author";
import Category from "./Subcomponents/Category";
import Description from "./Subcomponents/Description";
import FeaturedImage from "./Subcomponents/FeaturedImage";
import Heading from "./Subcomponents/Heading";
import Status from "./Subcomponents/Status";
import Tag from "./Subcomponents/Tag";
import Template from "./Subcomponents/Template";
import Title from "./Subcomponents/Title";
import { Aside, Main, Wrapper } from "./Wrapper";
import { Provider } from "./_context/Provider";

const AddNewPost = () => {
  return (
    <Provider>
      <Heading className="mb-3" heading="Add New Post" />
      <Wrapper>
        <Main>
          <Title />
          <Description />
        </Main>
        <Aside>
          <Status />
          <Category />
          <Tag />
          <FeaturedImage />
          <Author />
          <Template />
        </Aside>
      </Wrapper>
    </Provider>
  );
};

export default AddNewPost;
