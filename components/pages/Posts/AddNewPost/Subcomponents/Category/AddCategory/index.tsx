import MyButton from "@/components/Utils/MyButton";

const AddCategory = () => {
  return (
    <div className="space-y-3.5 py-5">
      <input type="text" className="input" />
      <select className="input select">
        <option value="0">— Parent Category —</option>
      </select>
      <MyButton btntype="lite">Add New Category</MyButton>
    </div>
  );
};

export default AddCategory;
