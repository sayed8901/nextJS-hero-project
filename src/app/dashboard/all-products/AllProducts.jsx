"use client";

import Modal from "@/components/Modal";
import db from "@/db.json";

import { useRef, useState } from "react";
import ManageSingleProduct from "../manage-products/ManageSingleProduct";

const AllProducts = () => {
  const products = db.products;

  const isLoading = false;
  const modalRef = useRef(null);

  const [updateData, setUpdateData] = useState(null);

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const newUpdatedData = { title, price };

    if (title && price) {
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
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

export default AllProducts;
