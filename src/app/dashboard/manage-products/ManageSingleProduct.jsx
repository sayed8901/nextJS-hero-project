
const ManageSingleProduct = ({ product, openModal }) => {
    const { id, title, price, categoryID, imageUrl } = product;
    
    return (
        <tr className="text-center w-full">
            <td className="border border-slate-400 p-2">{title}</td>
            <td className="border border-slate-400">{price}</td>
            <td className="border border-slate-400">
                <button onClick={() => openModal(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Update</button>
            </td>
            <td className="border border-slate-400">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Delete</button>
            </td>
        </tr>
    );
};

export default ManageSingleProduct;