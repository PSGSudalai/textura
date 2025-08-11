import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/productsData";

const Products = () => {
  return (
    <div className="shop-area section-space-y-axis-100">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-img">
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="primary-img"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <Link className="product-name" to={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                  <div className="price-box pb-1">
                    <span className="new-price">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="rating-box">
                    <ul>
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <li key={i}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
