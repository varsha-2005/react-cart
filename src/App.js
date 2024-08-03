import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";
import Favourite from "./components/Favourite";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} favorites={favorites} />

        <div className="conatiner">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cart={cart}
                  setCart={setCart}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/Cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route
              path="/Favorites"
              element={
                <Favourite favorites={favorites} setFavorites={setFavorites} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
