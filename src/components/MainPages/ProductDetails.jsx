import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cardContext } from "../context/CardContextProvider";

const ProductDetails = () => {
  const { getOneTowar, towarsDetails, deleteTowars } = useContext(cardContext);

  let { id } = useParams();
  console.log(towarsDetails);
  useEffect(() => {
    getOneTowar(id);
  }, [id]);
  return (
    <>
      {towarsDetails ? (
        <div className="cont">
          <div className="boxDetails">
            <div className="boxDetails_left">
              <img src={towarsDetails.image} alt={towarsDetails.title} />
            </div>
            <div className="boxDetails_right">
              <span className="discounts">{towarsDetails.discount} % Off</span>
              <h3>{towarsDetails.title}</h3>
              <h4>{towarsDetails.price} $</h4>
              <p>{towarsDetails.disconut}</p>
              <div className="right_adminBtn">
                <button
                  className="btn-delete"
                  onClick={() => deleteTowars(towarsDetails.id)}
                >
                  Удалить
                </button>
                <button
                  className="btn-edit"
                  //   onClick={() => navigate(`/edit/${id}`)}
                >
                  Редактировать
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductDetails;
