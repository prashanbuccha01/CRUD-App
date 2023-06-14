import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      alert("Fill every Field");
      setName("");
      setPrice("");
      setCategory("");
      setCompany("");
      document.querySelector(".inputBox1").focus();
    } else {
      let userId = JSON.parse(localStorage.getItem("user"))._id;
      let result = await fetch("http://localhost:5000/add-product", {
        method: "post",
        body: JSON.stringify({ name, price, category, company, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product name"
        className="inputBox inputBox1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button onClick={() => addProduct()}>Add Product</button>
    </div>
  );
};

export default AddProduct;
