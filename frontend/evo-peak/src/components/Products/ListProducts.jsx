
import CardAdminProducts from "./CardAdminProducts.jsx";

const ListProducts = ({products, deleteProducts,updateProducts}) => {
    return(
        <>
        <div className="product-list">
          {products?.map((product) => (
            <CardAdminProducts
              key={product._id}
              product={product}
              deleteProduct={deleteProducts}
              updateProducts={updateProducts}
            />
          ))}
        </div>
        </>
    );
};

export default ListProducts;