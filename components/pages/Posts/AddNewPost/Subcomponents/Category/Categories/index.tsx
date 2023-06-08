import CheckBox from "@/components/Utils/CheckBox";
import { categoriesApiCall } from "./pageData";

const Categories = async () => {
  const categories = await categoriesApiCall();
  return (
    <div className="py-3">
      <div className="space-y-1">
        {categories.map((category) => (
          <CheckBox key={category._id} label={category.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
