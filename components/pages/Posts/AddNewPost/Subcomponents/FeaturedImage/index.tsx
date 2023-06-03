import { CardWrapper, Body, Head } from "../Subcomponents/CardLayout";
import ImageUploaders from "./UploadImage/images";

const FeaturedImage = () => {
  return (
    <CardWrapper>
      <Head heading="Featured Image" />
      <Body>
        <ImageUploaders />
        <button className="text-[var(--color-active3)] underline text-[13px]">
          Set featured image
        </button>
      </Body>
    </CardWrapper>
  );
};

export default FeaturedImage;
