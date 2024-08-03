import React, { useState } from "react";
import data from "../assests/products.json";
import Product from "./Product";
import "./Home.css";
const Home = ({ cart, setCart, favorites, setFavorites,search }) => {
  const [products] = useState(data);
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
  );
};

export default Home;
