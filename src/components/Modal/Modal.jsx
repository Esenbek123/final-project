import React from "react";
import AddProduct from "../MainPages/AddProduct";
import "./Modal.css";
const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal"}
        onClick={(e) => e.stopPropagation()}
      >
        <AddProduct />
      </div>
    </div>
  );
};

export default Modal;
