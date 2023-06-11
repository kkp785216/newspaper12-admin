import { DataContext } from "../../_context/DataContext";
import { CardWrapper, Body, Head } from "../Subcomponents/CardLayout";
import AddCategory from "./AddCategory";
import Categories from "./Categories";
import { useContext } from "react";

const Category = () => {
  const {
    categoriesData: { categories },
  } = useContext(DataContext);
  return (
    <div>
      <CardWrapper>
        <Head heading="Categories" />
        <Body>
          <Categories categories={categories} />
          <AddCategory categories={categories} />
        </Body>
      </CardWrapper>
    </div>
  );
};

export default Category;
