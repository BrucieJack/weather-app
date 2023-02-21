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
import Menu from "./components/menu/Menu";
import { useQuery } from "react-query";
import { getWeather } from "./api/weatherApi";

function App() {
  const { isSuccess, isLoading, refetch, isError, error, data } = useQuery(
    ["posts"],
    () => getWeather("MInsk")
  );

  console.log(data);

  return (
    <WeatherAppBox>
      <Header />
      <MainBox>
        <Menu></Menu>
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
function getAllPostsFn(): any {
  throw new Error("Function not implemented.");
}
