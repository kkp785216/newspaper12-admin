import React from "react";
import { CardWrapper, Body, Footer, Head } from "../Subcomponents/CardLayout";

const Status = () => {
  return (
    <div>
      <CardWrapper>
        <Head heading="Publish" />
        <Body></Body>
        <Footer>
          <button className="btn ml-auto block">Publish</button>
        </Footer>
      </CardWrapper>
    </div>
  );
};

export default Status;
