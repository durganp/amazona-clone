import React from "react";
import Product from "../conponent/Product";
import data from "../data";
export default function HomeScreen(props) {
  const { product } = props;
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}
