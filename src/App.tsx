import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainBox, WeatherAppBox } from "./components/mainComponents/components";
import Header from "./components/header/Header";
import { MenuBox } from "./components/menu/components";

function App() {
  return (
    <WeatherAppBox>
      <Header />
      <MainBox>
        <MenuBox></MenuBox>
      </MainBox>
    </WeatherAppBox>
  );
}

export default App;
