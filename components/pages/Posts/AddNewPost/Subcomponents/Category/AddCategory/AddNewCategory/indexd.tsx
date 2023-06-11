import MyButton from "@/components/Utils/MyButton";
import { CategoryGetResult } from "@type/Category_APIs_Type";

type Props = {
  categories: CategoryGetResult[];
};

const AddNewCategory = ({ categories }: Props) => {
  return (
    <div className="space-y-3.5 py-5">
      <input type="text" className="input" />
      <select className="input select">
        <option value="0">— Parent Category —</option>
        {categories.map((category) => (
          <option value={category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <MyButton btntype="lite">Add New Category</MyButton>
    </div>
  );
};

export default AddNewCategory;
