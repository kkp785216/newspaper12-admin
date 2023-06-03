import { Body, CardWrapper, Head } from "../Subcomponents/CardLayout";

const Author = () => {
  return (
    <CardWrapper>
      <Head heading="Author" />
      <Body>
        <select className="input select">
          <option value="root">root (root)</option>
        </select>
      </Body>
    </CardWrapper>
  );
};

export default Author;
