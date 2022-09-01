import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardContext } from "../context/CardContextProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FleshCard = ({ addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const { towarsArr, getTowars, deleteTowars } = useContext(cardContext);
  let { id } = useParams();
  useEffect(() => {
    getTowars();
  }, [id]);
  console.log();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log(towarsArr);
  let newArr = towarsArr.filter((item) => {
    let elem = item.discount > 0;
    return elem;
  });
  console.log(newArr);
  return (
    <>
      <div className="box3">
        {/* <Slider {...settings}> */}
        {newArr.map((item) => (
          <div className="product mtop" key={item.id}>
            <div className="img">
              <span className="discount">{item.discount} % Off</span>
              <img src={item.image} alt="" />
              <div className="product-like">
                <label>0</label>
                <br />
                <i className="fa-regular fa-heart" onClick={increment}></i>
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
                <button onClick={() => addToCart(item)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </>
  );
};

export default FleshCard;
