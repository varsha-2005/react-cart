import React, { useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
const Product = ({ product, cart, setCart, favorites, setFavorites }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleFavorite = () => {
    const isFavorite = favorites.some((f) => f.id === product.id);
    if (isFavorite) {
      setFavorites(favorites.filter((f) => f.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div
      className={`product ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      {!isExpanded ? (
        <>
          <div className="img">
            <img src={product.pic} alt={product.name}></img>
          </div>
          <div className="details">
            <h3>{product.name}</h3>
            <p>Price: ${product.amt}</p>
            <div className="button-flexx">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <button
                style={{ borderLeft: "0.5px solid aliceblue" }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite();
                }}
              >
                <FontAwesomeIcon
                  icon={
                    favorites.some((f) => f.id === product.id)
                      ? faHeartBroken
                      : faHeart
                  }
                  style={{
                    color: favorites.some((f) => f.id === product.id)
                      ? "red"
                      : "white",
                  }}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="additional-info">
          <div className="image">
            <img src={product.pic} alt={product.name}></img>
          </div>
          <div className="additional-info-details">
            <h3>{product.name}</h3>
            <p>Price: ${product.amt}</p>
            <p>Shop: {product.shop}</p>
            <p>Type: {product.ftype}</p>
            <p>Latest: {product.latest}</p>
            <p className="desc">
              <strong>Description:</strong>
              {product.description}
            </p>
            <div className="button-flexx">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite();
                }}
              >
                <FontAwesomeIcon
                  icon={
                    favorites.some((f) => f.id === product.id)
                      ? faHeartBroken
                      : faHeart
                  }
                  style={{
                    color: favorites.some((f) => f.id === product.id)
                      ? "red"
                      : "white",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
