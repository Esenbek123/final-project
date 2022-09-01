import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
// import "./NavBar.css";
const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <button onClick={() => setModalActive(true)} className="button">
                  Add Products
                </button>
                <Modal active={modalActive} setActive={setModalActive} />
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-bth"></i>
              ) : (
                <i className="fa-solid fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
