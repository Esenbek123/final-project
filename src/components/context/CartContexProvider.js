import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsCart,
} from "../helper/Functions";

export const cartContext = createContext();
const INIT_STATE = {
  cart: {},
  cartLength: getCountProductsCart(),
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...prevState, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...prevState, cartLength: action.payload };
    default:
      return prevState;
  }
};

const CartContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductCart = (towarItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        towars: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: towarItem,
      count: 1,
      subPrice: 0,
    };

    let filterCart = cart.towars.filter((elem) => {
      return elem.item.id === towarItem.id;
    });

    if (filterCart.length > 0) {
      cart.towars = cart.towars.filter((elem) => {
        return elem.item.id !== towarItem.id;
      });
    } else {
      cart.towars.push(newProduct);
    }

    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.towars);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.towars.length,
    });
  };

  const getCarts = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        towars: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  // const changeProductCount = (id, count) => {
  //   let cart = JSON.parse(localStorage.getItem("cart"));
  //   cart.towars = cart.towars.map((elem) => {
  //     if (elem.item.id === id) {
  //       elem.count = count;
  //       elem.subPrice = calcSubPrice(elem);
  //     }
  //     return elem;
  //   });
  //   cart.totalPrice = calcTotalPrice(cart.towars);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   getCarts();
  // };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.towars = cart.towars.filter((elem) => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.towars);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.towars.length,
    });
    getCarts();
  };

  // ===========================
  const cloud = {
    addProductCart,
    getCarts,
    deleteCartProduct,
    cart: state.cart,
    cartLength: state.cartLength,
  };
  return <cartContext.Provider value={cloud}>{children}</cartContext.Provider>;
};

export default CartContexProvider;
