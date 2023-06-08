import CheckBox from "@/components/Utils/CheckBox";
import { tagsApiCall } from "./pageData";

const Tags = async () => {
  const tags = await tagsApiCall();
  return (
    <div className="py-3">
      <div className="space-y-1">
        {tags.map((tag) => (
          <CheckBox key={tag._id} label={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
