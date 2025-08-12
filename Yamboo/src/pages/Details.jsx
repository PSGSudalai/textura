import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/productsData";
import NewProducts from "../components/NewProducts";

const Details = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  console.log(product)

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
    <div className="container py-5">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      {console.log(product)}
      <p>{product.description}</p>
      <h3>${product.price.toFixed(2)}</h3>

      <h4>Key Attributes</h4>
      <ul>
        {Object.entries(product.attributes).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>{" "}
            {Array.isArray(value) ? value.join(", ") : value}
          </li>
        ))}
      </ul>
    </div>
    
      <NewProducts/>
    </>
  );
};

export default Details;
