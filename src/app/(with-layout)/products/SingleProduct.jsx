import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { id, title, price, categoryID, features } = product;
  return (
    <div className="rounded-xl px-2 py-4 shadow-lg">
      <h2 className="font-semibold">{title}</h2>
      <p>$ {price}</p>
      <Link className="inline-block" href={`products/${id}`}>
        <button className="text-white p-2 bg-blue-500 rounded-lg">
          Details
        </button>
      </Link>
    </div>
  );
};

export default SingleProduct;
