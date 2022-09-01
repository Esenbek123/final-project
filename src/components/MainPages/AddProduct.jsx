import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { cardContext } from "../context/CardContextProvider";
const AddProduct = () => {
  const { addTowars } = useContext(cardContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState("");

  function handleClick() {
    if (!title || !price || !image || !discount) {
      alert("Введите все инпуты");
      return;
    }
    let newCards = {
      title,
      price,
      image,
      discount,
    };
    addTowars(newCards);
    setTitle("");
    setDiscount("");
    setImage("");
    setPrice("");
  }
  return (
    <div className="addProduct">
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic "
        variant="outlined"
        label="Product name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <div className="container__inp-list"></div> */}
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        variant="outlined"
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Photo"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="discount"
        variant="outlined"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <Button
        onClick={handleClick}
        color="success"
        variant="contained"
        disableElevation
      >
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
