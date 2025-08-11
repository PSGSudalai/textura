import React from "react";
import Products from "../components/Products";
import Breadcrumb from "../components/BreadCrumb";

const Shop = () => {
  return (
    <div>
      <main className="main-content">
        <Breadcrumb
          title="Contact"
          links={[
            { to: "/", label: "Home" },
            { label: "Shop" }
          ]}
        />
        <Products/>
      </main>
    </div>
  );
};

export default Shop;
