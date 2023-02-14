import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  DataBox,
  DaysBox,
  MainBox,
  WeatherAppBox,
} from "./components/mainComponents/components";
import Header from "./components/header/Header";
import { MenuBox } from "./components/menu/components";
import BigWeatherBox from "./components/weatherBox/BigWeatherBox";
import SmallWeatherBox from "./components/weatherBox/SmallWeatherBox";

function App() {
  return (
    <WeatherAppBox>
      <Header />
      <MainBox>
        <MenuBox></MenuBox>
        <DataBox>
          <BigWeatherBox />
          <DaysBox>
            <SmallWeatherBox />
            <SmallWeatherBox />
            <SmallWeatherBox />
            <SmallWeatherBox />
            <SmallWeatherBox />
            <SmallWeatherBox />
            <SmallWeatherBox />
          </DaysBox>
        </DataBox>
      </MainBox>
    </WeatherAppBox>
  );
}

export default App;
