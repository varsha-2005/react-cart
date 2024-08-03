import React, { useState } from "react";
import data from "../assests/products.json";
import Product from "./Product";
import "./Home.css";
const Home = ({ cart, setCart, favorites, setFavorites }) => {
  const [search, setSearch] = useState("");
  const [products] = useState(data);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"></label>
        <input
          id="search"
          role="searchbox"
          placeholder="Search Items"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={{ ...product, quantity: 1 }}
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default Home;
