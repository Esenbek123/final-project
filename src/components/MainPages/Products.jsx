import { Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CardContextProvider, {
  cardContext,
} from "../context/CardContextProvider";
import { cartContext } from "../context/CartContexProvider";

const Products = () => {
  const { getProducts, productsArr, pageTotalCount } = useContext(cardContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [type, setType] = useState(searchParams.get("category") || "all");
  const { addProductCart } = useContext(cartContext);
  const paramsWithType = () => {
    return {
      category: type,
      q: searchParams.get("q") || "",
      _page: page,
      _limit: 4,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
      _page: page,
      _limit: 4,
    };
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);
  useEffect(() => {
    getTowars();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [searchParams, type, page]);
  const { towarsArr, getTowars } = useContext(cardContext);
  useEffect(() => {
    getTowars();
  }, []);
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },

    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },

    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },

    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ];
  return (
    <>
      <div className="category category2">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>

      <div className="box-cart">
        {towarsArr.map((item) => (
          <div className="product mtop" key={item.id}>
            <div className="img">
              <span className="discount">{item.discount} % Off</span>
              <Link to={`/details/${item.id}`}>
                <img src={item.image} alt="" />
              </Link>
              <div className="product-like">
                <label>0</label>
                <br />
              </div>
            </div>
            <div className="product-details">
              <h3>{item.title}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>{item.price}$</h4>
                <button onClick={() => addProductCart(item)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagin d-flex justify-content-center my-4">
        <Pagination
          count={+pageTotalCount}
          variant="outlined"
          color="primary"
          shape="rounded"
          page={+page}
          onChange={(e, pageVal) => {
            setPage(pageVal);
          }}
        />
      </div>
    </>
  );
};

export default Products;
