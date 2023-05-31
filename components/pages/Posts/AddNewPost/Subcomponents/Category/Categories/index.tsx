import CheckBox from "@/components/Utils/CheckBox";

const Categories = () => {
  return (
    <div className="py-3">
      <div className="space-y-1">
        <CheckBox label="News" />
        <CheckBox label="Blog" />
        <CheckBox label="Featured" />
      </div>
    </div>
  );
};

export default Categories;
