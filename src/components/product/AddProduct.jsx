import React, { useState } from "react";
import scss from "./AddProduct.module.scss";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  price: "",
  category: "",
  image: "",
};

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initialValues);

  const checkInputValue = (e) => {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };

  const sendData = () => {
    if (
      inputValues.name === "" ||
      inputValues.price === "" ||
      inputValues.category === "" ||
      inputValues.image === ""
    ) {
      alert("Заполните все поля!!!");
      return;
    }
    addProduct(inputValues);
    setInputValues(initialValues);
    navigate("/");
  };

  return (
    <div id={scss.admin}>
      <div className="container">
        <div className={scss.admin}>
          <div className={scss.form_container}>
            <p className={scss.title}>Добавление продукта</p>
            <form className={scss.form}>
              <div className={scss.input_group}>
                <label>Имя товара</label>
                <input
                  onChange={(e) => checkInputValue(e)}
                  name="name"
                  type="text"
                  value={inputValues.name}
                />
              </div>
              <div className={scss.input_group}>
                <label>Цена товара</label>
                <input
                  onChange={(e) => checkInputValue(e)}
                  name="price"
                  type="text"
                  value={inputValues.price}
                />
                <label>Категория товара</label>
                <input
                  onChange={(e) => checkInputValue(e)}
                  name="category"
                  type="text"
                  value={inputValues.category}
                />
                <label>URL товара</label>
                <input
                  onChange={(e) => checkInputValue(e)}
                  type="text"
                  name="image"
                  value={inputValues.image}
                />
              </div>
              <button type="button" onClick={sendData} className={scss.sign}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
