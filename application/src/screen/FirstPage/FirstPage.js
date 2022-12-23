import React from "react";
import "./firstpage.css";
import tap from "../../assets/image/tap.png";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product`);
  };

  return (
    <div className="container-first-page" onClick={() => onClick()}>
      <div className="test">
        <div className="imageContainer">
          <div className="text blinking ">화면을 터치하여 시작하세요.</div>
          <img className="tapImage blinking" alt="tap" src={tap} />
        </div>
      </div>
    </div>
  );
}
