import getSingleProduct from "@/utilities/getSingleProduct";

const SingleProductPage = async ({ params }) => {
    const product = await getSingleProduct(params.id);
    return (
        <div className="my-10 container mx-auto">
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p>$ {product.price}</p>
        </div>
    );
};

export default SingleProductPage;