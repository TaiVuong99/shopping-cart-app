import Header from "components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "features/Main";
import None from "features/None";
import Checkout from "features/Checkout";

import "App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<None />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/reviews" element={<None />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

        <Route path="*" element={<Navigate to="/products" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
