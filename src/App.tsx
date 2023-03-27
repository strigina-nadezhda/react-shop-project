import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import { BasicBreadcrumbs } from './components/Breadcrumbs';
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";
import Shop from "./pages/Shop";

import "./css/main.css";

import { enableMapSet } from "immer";
import BasketPage from "./pages/BasketPage";
import { IProduct } from "./store/types/types";

enableMapSet();

const App: React.FC = () => {
  const product: IProduct = {
    img: "card-2.png",
    title: "AOS средство для мытья посуды Crystal",
    unit: "Обьём",
    size: "450",
    barcode: "4604049097549",
    manufacturer: "Нэфис",
    brand: "AOS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
    price: "56,98 ",
    type: ["BODY"],
  };

  return (
    <div className="wrapper">
      <Header />
      {/* <BasicBreadcrumbs /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<Shop />} />
        <Route
          path="/catalog/:barcode"
          element={<ProductPage {...product} />}
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
