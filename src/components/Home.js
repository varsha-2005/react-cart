import React, { useState } from "react";
import data from "../assests/products.json";
import Product from "./Product";
import "./Home.css";

const Home = ({ cart, setCart, favorites, setFavorites }) => {
  const [search, setSearch] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [products] = useState(data);

  const handleSort = (products) => {
    switch (sortCriteria) {
      case "priceLowToHigh":
        return products.sort((a, b) => a.amt - b.amt);
      case "priceHighToLow":
        return products.sort((a, b) => b.amt - a.amt);
      case "alphabetical":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  };

  const filteredProducts = handleSort(
    products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Items</label>
        <input
          id="search"
          role="searchbox"
          placeholder="Search Items"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="">None</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
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
