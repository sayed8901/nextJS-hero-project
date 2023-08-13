import getAllProducts from '@/utilities/getAllProducts';
import SingleProduct from './SingleProduct';

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryID);

    return (
        <div className='mt-10 container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    products.map((product) =>
                        <SingleProduct
                            key={product.id}
                            product={product}
                        ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;