import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/productsData";
import NewProducts from "../components/NewProducts";
import Breadcrumb from "../components/BreadCrumb";

const Details = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <main className="main-content">
      <Breadcrumb
        title={product.name}
        links={[
          { to: "/", label: "Home" },
          { label: "Product Details" }
        ]}
      />

      <div className="single-product-area section-space-top-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-product-img">
                <img className="img-full" src={product.image} alt={product.name} />
              </div>
            </div>

            <div className="col-lg-6 pt-5 pt-lg-0">
              <div className="single-product-content">
                <h2 className="title">{product.name}</h2>
                {/* <div className="price-box">
                  <span className="new-price">${product.price.toFixed(2)}</span>
                </div> */}
                <p className="short-desc">{product.description}</p>

                <h4>Product Details</h4>
                <table className="table table-bordered">
                  <tbody>
                    {Object.entries(product.attributes).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key.toUpperCase()}</th>
                        <td>{Array.isArray(value) ? value.join(", ") : value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewProducts />
    </main>
  );
};

export default Details;
