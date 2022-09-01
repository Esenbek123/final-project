import axios from "axios";
import React, { createContext, useReducer } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const cardContext = createContext();
const API = "http://localhost:8000/tovars";

const INIT_STATE = {
  towars: [],
  towarsDetails: null,
  pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...prevState,
        towars: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_CARDS_DETAILS":
      return { ...prevState, towarsDetails: action.payload };
    default:
      return prevState;
  }
};
const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();
 
  const addTowars = (towars) => {
    axios.post(API, towars);
  };

  const getTowars = async () => {
    const data = await axios.get(`${API}${location.search}`);

    let action = {
      type: "GET_CARDS",
      payload: data,
    };
    dispatch(action);
  };
  const getOneTowar = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_CARDS_DETAILS",
      payload: data,
    });
  };

  const deleteTowars = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTowars();
    navigate("/products");
  };
  let cloud = {
    addTowars,
    getTowars,
    getOneTowar,
    deleteTowars,
    towarsArr: state.towars,
    towarsDetails: state.towarsDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return <cardContext.Provider value={cloud}>{children}</cardContext.Provider>;
};

export default CardContextProvider;
