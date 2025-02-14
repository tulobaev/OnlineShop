import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import scss from "./Home.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaEdit } from "react-icons/fa";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { CircularProgress, Box } from "@mui/material";

const Home = () => {
  const { readProduct, product, deleteProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <>
      {product.length > 0 ? (
        <div id={scss.home}>
          <div className="container">
            <div className={scss.home}>
              {product.map((item, index) => (
                <div key={index} className={scss.product_card}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={scss.product_image}
                  />
                  <div className={scss.product_info}>
                    <h3 className={scss.product_name}>{item.name}</h3>
                    <p className={scss.product_price}>$ {item.price}</p>
                  </div>
                  <div className={scss.product_actions}>
                    <DeleteIcon
                      className={scss.delete_btn}
                      onClick={() => deleteProduct(item._id)}
                    />
                    <FaEdit className={scss.edit_btn} />
                    <LocalMallIcon className={scss.cart_btn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress sx={{ color: "black" }} />
        </Box>
      )}
    </>
  );
};

export default Home;
