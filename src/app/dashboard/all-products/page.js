import getAllProducts from "@/utilities/getAllProducts";
import AllProducts from "./AllProducts";

export const metadata = {
    title: 'All-products | Next hero',
    description: 'Next programming hero',
}

const AllProductsPage = () => {

    return (
        <div className="w-full my-10">
            <h1 className="text-2xl font-semibold mb-4">All Products</h1>
            <AllProducts />
        </div>
    );
};

export default AllProductsPage;