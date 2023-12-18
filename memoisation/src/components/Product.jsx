import React from "react";

function Product({ id, name }) {
  console.log("product", id);
  return (
    <div>
      <h1>
        id: {id} - name: {name}
      </h1>
    </div>
  );
}

export default Product;
