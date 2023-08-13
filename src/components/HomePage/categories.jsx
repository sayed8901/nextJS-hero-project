import getAllCategories from "@/utilities/getAllCategories";
import SingleCategory from "./singleCategory";

const Categories = async () => {
  const categories = await getAllCategories();
  return (
    <div className="my-10 px-2">
      <h1 className="text-2xl font-medium mb-5">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
