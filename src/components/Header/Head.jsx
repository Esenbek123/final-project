import React from "react";
// import "./Head.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+996 707331109</label>
            <label>example@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ</label>
            <label>Needs Helps</label>
            <label htmlFor="">EN</label>
            <label htmlFor="">USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
