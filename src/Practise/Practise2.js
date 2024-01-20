import axios from "axios";
import React, { useEffect, useState } from "react";

const Practise2 = () => {
  const [showProduct, setShowProduct] = useState([]);
  const onlineProducts = async () => {
    let response = await axios("http://localhost:3000/products");
    setShowProduct(response.data);
  };

  useEffect(() => {
    onlineProducts();
  }, []);
  return (
    <>
      <div
        style={{ margin: "auto",paddingLeft: "14rem" }}
      >
        <h1 style={{textAlign:"center"}}>Shikha Online Shop</h1>
        <p style={{textAlign:"center"}}>Eat more Laugh more</p>
        <div style={{ display: "flex" }}>
          {showProduct.map((item, index) => (
            <div key={index} style={{ marginRight: "32px" }}>
              <img
                src={item.image}
                style={{ width: "230px", height: "230px" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{item.food_name}</h5> <h5>{item.Price} Rs</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Practise2;
