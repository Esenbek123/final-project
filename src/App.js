import React from "react";
import AuthContextProvider from "./components/context/AuthContext";
import CardContextProvider from "./components/context/CardContextProvider";
import CartContexProvider from "./components/context/CartContexProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <CartContexProvider>
          <CardContextProvider>
            <Header />
            <MainRoutes />
            <Footer />
          </CardContextProvider>
        </CartContexProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
