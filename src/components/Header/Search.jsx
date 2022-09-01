import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Badge } from "@mui/material";
import { cartContext } from "../context/CartContexProvider";
// import "./Search.css";
// import logo from "./images/original-3aad87878399c27752ecdb2deb03dcb0.webp";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { cartLength } = useContext(cartContext);

  useEffect(() => {
    if (location.pathname === "/products") {
      setSearchParams({
        q: searchValue,
      });
    }
  }, [searchValue]);
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">{/* <img src={logo} alt="" /> */}</div>

          <div className="search-box f_flex">
            <i className="seacrh-icon fa fa-search "></i>
            <input
              type="text"
              placeholder="Search and hit enter..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value || "")}
            />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <Link to="/auth">
              <i className="fa fa-user icon-circle"></i>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
