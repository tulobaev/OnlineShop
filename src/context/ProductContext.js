import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const API =
    "https://api-crud.elcho.dev/api/v1/3af6f-47a22-a0841/productsData";

  async function addProduct(obj) {
    await axios.post(API, obj);
    readProduct();
  }

  async function readProduct() {
    let { data } = await axios.get(API);
    setProduct(data.data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let { data } = await axios.get(`${API}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API}/${id}`, editedProduct);
    readProduct();
  }

  const values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
