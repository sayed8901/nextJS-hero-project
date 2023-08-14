"use client";

import Modal from "@/components/Modal";
import ManageSingleProduct from "./ManageSingleProduct";
import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const ManageProduct = ({ products }) => {
  const modalRef = useRef(null);

  const [updateData, setUpdateData] = useState(null);

  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const isLoading = isPending || loading;

  const router = useRouter();

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const newUpdatedData = { title, price };

    if (title && price) {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUpdatedData),
          }
        );
        const result = await res.json();
        console.log(result);
        form.reset();
        closeModal();
        setLoading(false);
        startTransition(() => {
          router.refresh();
        });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      console.log('Item deleted successfully.');
      startTransition(() => {
        router.refresh();
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <table
        className={`border-collapse w-full ${
          isLoading ? "animate-pulse" : "opacity-100"
        }`}
      >
        <thead>
          <tr>
            <th className="border border-slate-400">Title</th>
            <th className="border border-slate-400">Price</th>
            <th className="border border-slate-400">Update</th>
            <th className="border border-slate-400">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ManageSingleProduct
              key={product.id}
              product={product}
              openModal={openModal}
              handleDelete={handleDelete}
            ></ManageSingleProduct>
          ))}
        </tbody>
      </table>

      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManageProduct;
