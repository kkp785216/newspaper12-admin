import Category from "./Subcomponents/Category";
import Heading from "./Subcomponents/Heading";
import Status from "./Subcomponents/Status";
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
        </Main>
        <Aside>
          <Status />
          <Category />
        </Aside>
      </Wrapper>
    </Provider>
  );
};

export default AddNewPost;
