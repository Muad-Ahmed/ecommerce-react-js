import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
import ProductDetails from "./page/productDetails/ProductDetailsPage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "motion/react";
import CategoryPage from "./page/categoryPage/CategoryPage";
import SearchResultPage from "./page/searchResult/SearchResultPage";
import Favorites from "./page/favorites/Favorites";
import AboutUs from "./page/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import Accessories from "./page/accessories/Accessories";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "mens-watches",
  "sports-accessories",
  "home-decoration",
];

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader categoriesList={categories} />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </AnimatePresence>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
