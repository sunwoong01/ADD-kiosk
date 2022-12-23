import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import FirstPage from "./screen/FirstPage/FirstPage";
import SelectScreen from "./screen/SelectScreen/SelectScreen";

function App() {
  // products = [
  // 	{
  // 		prod_id: '1',
  // 		prod_name: 'Hamburger',
  // 		prod_price: 3,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '2',
  // 		prod_name: 'Cake',
  // 		prod_price: 3,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '3',
  // 		prod_name: 'Coffee',
  // 		prod_price: 5,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '4',
  // 		prod_name: 'Hotdog',
  // 		prod_price: 3,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '5',
  // 		prod_name: 'Cupcake',
  // 		prod_price: 7,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '6',
  // 		prod_name: 'Pie',
  // 		prod_price: 8,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '7',
  // 		prod_name: 'Pizza',
  // 		prod_price: 4,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	},
  // 	{
  // 		prod_id: '8',
  // 		prod_name: 'Bun',
  // 		prod_price: 2,
  // 		prod_image: 'https://img.icons8.com/plasticine/2x/hamburger.png',
  // 		prod_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  // 	}
  // ];

  return (
    <div className="App" style={{ height: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/product" element={<SelectScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
