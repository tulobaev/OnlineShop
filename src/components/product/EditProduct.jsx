import scss from "./AddProduct.module.scss";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const initialValues = {
  name: "",
  price: "",
  category: "",
  image: "",
};

const EditProduct = () => {
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const [inputValues, setInputValues] = useState(initialValues);
  const { id } = useParams();

  const navigate = useNavigate(); // для перехода на главную страницу

  useEffect(() => {
    getOneProduct(id); // это id от useParams поисковик id
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

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
    editProduct(id, inputValues);
    setInputValues(initialValues);
    navigate("/");
  };

  return (
    <div id={scss.admin}>
      <div className="container">
        <div className={scss.admin}>
          <div className={scss.form_container}>
            <p className={scss.title}>Изменение продукта</p>
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
                Изменить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
