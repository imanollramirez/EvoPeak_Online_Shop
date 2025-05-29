import CardAdminCategories from "../Categories/CardCategories.jsx";

const ListCategories = ({categories,deleteCategories,updateCategories}) => {
    return (
    <div className="categories-list">
      {categories.map((category) => (
        <CardAdminCategories
          key={category._id}
          category={category}
          deleteCategory={deleteCategories}
          updateCategories={updateCategories}
        />
      ))}
    </div>
  );
};

export default ListCategories;
