import getSingleProduct from "@/utilities/getSingleProduct";

const SingleProductPage = async ({ params }) => {
    const product = await getSingleProduct(params.id);
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    );
};

export default SingleProductPage;