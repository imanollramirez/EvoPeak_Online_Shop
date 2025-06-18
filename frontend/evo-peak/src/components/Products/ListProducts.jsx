
import CardAdminProducts from "./CardAdminProducts.jsx";

const ListProducts = ({products, deleteProducts,updateProducts, categories}) => {
    return(
        <>
        <div className="product-list">
          {products?.map((product) => (
            <CardAdminProducts
              key={product._id}
              product={product}
              categories={categories}
              deleteProduct={deleteProducts}
              updateProducts={updateProducts}
            />
          ))}
        </div>
        </>
    );
};

export default ListProducts;