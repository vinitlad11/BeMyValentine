import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import begin from "../assets/begin.gif";
import "./Home.css";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
// import axios from "axios";

const Home = () => {
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

  var i = 1;
  const navigate = useNavigate();

  const handleYesOnClick = () => {
    navigate("/card/" + name);
    console.log(name);
  };

  const handleNoOnClick = () => {
    const noChange = [
      "No",
      "Are you Sure?",
      "Really Sure?",
      "Are you positive???",
      "Pookie Plzz",
      "Just think about it",
      "If you say no, I'll be very sad",
      "I'll be very very sad",
      "I'll be very very very sad",
      "I'll be very very very very sad",
      "Ok fine, I'll stop asking...",
      "Just Kidding, PLEASE SAY YES",
      "I'll be very very very very very sad",
      "You're breaking my heart",
    ];
    const targetButton = document.getElementById("yes")!;
    const noButton = document.getElementById("no")!;
    // if(targetButton || noButton){
    const currentWidth = parseFloat(getComputedStyle(targetButton).width);
    const currentHeight = parseFloat(getComputedStyle(targetButton).height);
    const fontSize = parseFloat(getComputedStyle(targetButton).fontSize);
    const newWidth = currentWidth + 30;
    const newHeight = currentHeight + 20;
    const newFont = fontSize + 10;
    targetButton.style.width = newWidth + "px";
    targetButton.style.height = newHeight + "px";
    targetButton.style.fontSize = newFont + "px";
    noButton.innerHTML = noChange[i];
    i++;
    if (i == 14) i = 0;
  };

  return (
    <>
      <div className="Home">
        <div className="imageCenter">
          <img src={begin} height={"150px"} width={"200px"} id="image" />
        </div>
        <div className="que">
          <span>Will you be my Valentine</span>
          <br />
          <span className="nameI"> {userData}💐?? </span>
          <br />
          👉👈
        </div>
        <br />
        <div className="btns">
          <div>
            <Button id="yes" onClick={handleYesOnClick} colorScheme="whatsapp">
              Yes
            </Button>
          </div>
          <div>
            <Button id="no" onClick={handleNoOnClick} colorScheme="twitter">
              No
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
