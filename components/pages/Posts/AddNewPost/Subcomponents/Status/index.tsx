import React from "react";
import { CardWrapper, Body, Footer, Head } from "../Subcomponents/CardLayout";
import MyButton from "@/components/Utils/MyButton";

const Status = () => {
  return (
    <div>
      <CardWrapper>
        <Head heading="Publish" />
        <Body>Publish</Body>
        <Footer>
          <MyButton btntype="fill" className="ml-auto block">
            Publish
          </MyButton>
        </Footer>
      </CardWrapper>
    </div>
  );
};

export default Status;
