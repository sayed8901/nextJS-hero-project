"use client"

import Modal from "@/components/Modal";
import ManageSingleProduct from "./ManageSingleProduct";
import { useRef, useState } from "react";

const ManageProduct = ({ products }) => {
    const modalRef = useRef(null);

    const [updateData, setUpdateData] =  useState(null) ;

    const openModal = (product) => {
        setUpdateData(product);
        modalRef.current.showModal();
    }

    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    }

  return (
    <div>
      <table className="border-collapse w-full">
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
              key={product.is}
              product={product}
              openModal={openModal}
            ></ManageSingleProduct>
          ))}
        </tbody>
      </table>

      <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} />
    </div>
  );
};

export default ManageProduct;
