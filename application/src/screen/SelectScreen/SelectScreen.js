import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import "./selectscreen.css";

export default function SelectScreen() {
  return (
    <div className="body-padding">
      <Header name={"룸을 선택하세요"} />
      <Navbar />
      <Products />
    </div>
  );
}
