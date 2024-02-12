// import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Card.css";
import final from "../assets/final.gif";
const Card = () => {
  let { name } = useParams();
  name = name?.toString();
  if (name) name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://be-my-valentine-api.vercel.app/${name}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  };

  return (
    <>
      <div className="happy-valentines">
        <div>
          <img src={final} height={"150px"} width={"150px"} />
        </div>
        <br />
        <div className="valentines-day-card">
          <div className="clouds"></div>
          <div className="hearts">
            <div className="heartOne">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartTwo">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartThree">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartFour">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartFive">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
          </div>
          <div className="text">
            <span>
              Happy Valentine's
              <br /> Day!
            </span>
            <br />
            <span className="name"> {userData} </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
