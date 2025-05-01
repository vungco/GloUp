import React from "react";
import { useLocation } from "react-router-dom";
import cartApi from "../../../api/cartApi";
import { useState, useEffect } from "react";
import Pay from "./Pay";
import Loading from "../../../utils/load";

const CheckInput = () => {
  const location = useLocation();
  const [carts, setcarts] = useState();

  const { type, data } = location.state || [];

  useEffect(() => {
    if (type == "cart") {
      console.log("cart");
      cartApi
        .getBySelectCart({
          cart_ids: data,
        })
        .then((response) => {
          setcarts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (type == "product_detail") {
      setcarts(data);
    }
  }, []);

  return carts ? <Pay getcarts={carts} /> : <Loading />;
};

export default CheckInput;
