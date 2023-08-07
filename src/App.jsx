import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Page404 from "./pages/Page404";
import NavigationBar from "./Components/NavigationBar";
import FooterSection from "./Components/FooterSection";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Admin from "./pages/Admin";
import { LoginRouteContext } from "./context/loginContext/LoginContext";

export default function App() {
  const { state } = useContext(LoginRouteContext);

  // const isAdmin = state.user && state.user.role === "admin"; // Assuming you have a user object with a "role" property indicating if the user is an admin.

  return (
    <>
      <NavigationBar />
      <Routes>
        {state.user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* {isAdmin && <Route path="/admin" element={<Admin />} />} */}
            { <Route path="/admin" element={<Admin />} />}
            <Route path="/products/:productID" element={<ProductPage />} />
            <Route
              path="/products/category/:categoryName"
              element={<CategoryPage />}
            />
            <Route path="*" element={<Page404 />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
          </>
        )}
      </Routes>
      
      <FooterSection />
    </>
  );
}
