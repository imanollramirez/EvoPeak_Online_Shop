
import CardAdminProducts from "./CardAdminProducts.jsx";

const listProducts = ({products, deleteProducts, updateProducts}) => {
    return(
        <>
        <div className="product-list">
          {products.map((product) => (
            <CardAdminProducts
              key={product.id}
              product={product}
              deleteProduct={deleteProducts}
              updateProduct={updateProducts}
            />
          ))}
        </div>
        </>
    );
};

export default listProducts;