import React from "react";
import "./Favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Favourite = ({ favorites, setFavorites }) => {
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  return (
    <>
      <h1 className="favorites-heading">Favorite Products</h1>

      <div className="favorites-container">
        {favorites.map((product) => (
          <div className="favorites-product" key={product.id}>
            <div className="fav">
              <div className="img">
                <img src={product.pic} alt={product.name} />
              </div>
              <div className="favorites-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs : {product.amt}</p>
              </div>
            </div>
            <div className="button-flex">
              <button
                className="btnRemove"
                onClick={() => removeFavorite(product.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourite;
