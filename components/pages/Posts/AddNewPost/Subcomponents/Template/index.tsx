import { Body, CardWrapper, Head } from "../Subcomponents/CardLayout";

const Template = () => {
  return (
    <CardWrapper>
      <Head heading="Template" />
      <Body>
        <select className="input select">
          <option value="1">Template 1</option>
          <option value="2">Template 2</option>
          <option value="3">Template 3</option>
        </select>
      </Body>
    </CardWrapper>
  );
};

export default Template;
