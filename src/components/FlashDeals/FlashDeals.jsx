import React from "react";
import FleshCard from "./FlashCard";

const FleshDeals = () => {
  return (
    <>
      <section className="flash backgraund">
        <div className="container ">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <FleshCard />
        </div>
      </section>
    </>
  );
};

export default FleshDeals;
