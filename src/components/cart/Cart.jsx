import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/CartContexProvider";
import "./Cart.css";
const Cart = () => {
  const { cart, getCarts, deleteCartProduct } = useContext(cartContext);

  useEffect(() => {
    getCarts();
  }, []);
  console.log(cart.towars);
  return (
    <section className="cart-items">
      {cart.towars ? (
        <>
          {cart.towars.length ? (
            <div className="container  d_flex">
              <div className="cart-details">
                {cart.towars.map((elem) => (
                  <div
                    key={elem.item.id}
                    className="cart-list product d_flex cartst"
                  >
                    <div className="img">
                      <img src={elem.item.image} alt={elem.item.title} />
                    </div>
                    <div className="cart-details">
                      <h3>{elem.item.title}</h3>
                      <h4>{elem.item.price}$</h4>
                      <span>${elem.subPrice}.00</span>
                    </div>
                    <div className="cart-items-function">
                      <div className="removeCart">
                        <button
                          onClick={() => deleteCartProduct(elem.item.id)}
                          className="removeCart"
                        >
                          <i className="fa -solid fa-xmark"></i>
                        </button>
                      </div>

                      <div className="cartControl d_flex">
                        <button className="IncCart">
                          <i className="fa fa-plus"></i>
                        </button>
                        <button className="IncCart">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="cart-total product">
                  <h2>Cart Summary: </h2>
                  <div className="d_flex">
                    <h3>Total Price :${cart.totalPrice} .00</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bgCart">
              <h1 className="no-items">No Items are add in Cart </h1>
              <img
                id="nullCart"
                alt="notFound"
                src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
              />
            </div>
          )}
        </>
      ) : (
        <h2>...loading</h2>
      )}
    </section>
  );
};

export default Cart;
