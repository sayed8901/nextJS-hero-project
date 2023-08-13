import getAllProducts from "@/utilities/getAllProducts";
import ManageProduct from "./ManageProduct";

export const metadata = {
    title: 'Manage-product " Next hero',
    description: 'Next programming hero',
  }
  
const ManageProductPage = async () => {
    const products = await getAllProducts();

    return (
        <div className="w-full my-10">
            <h1 className="text-2xl font-semibold mb-4">Manage Products</h1>
            <ManageProduct products={products}></ManageProduct>
        </div>
    );
};

export default ManageProductPage;