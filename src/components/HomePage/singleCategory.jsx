import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <Link className="border border-blue-400 rounded-xl px-2 py-4 shadow-lg" href={`/products/?categoryID=${id}`}>
      <h1>{name}</h1>
    </Link>
  );
};

export default SingleCategory;
