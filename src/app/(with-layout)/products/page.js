import getAllProducts from '@/utilities/getAllProducts';
import SingleProduct from './SingleProduct';

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryID);

    return (
        <div>
            {
                products.map((product) =>
                    <SingleProduct
                        key={product.id}
                        product={product}
                    ></SingleProduct>)
            }
        </div>
    );
};

export default ProductsPage;