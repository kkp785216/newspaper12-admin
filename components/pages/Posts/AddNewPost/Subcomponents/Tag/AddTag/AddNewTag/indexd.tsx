import MyButton from "@/components/Utils/MyButton";

const AddNewTag = () => {
  return (
    <div className="space-y-3.5 py-5">
      <input type="text" className="input" />
      <MyButton btntype="lite">Add New Tag</MyButton>
    </div>
  );
};

export default AddNewTag;
