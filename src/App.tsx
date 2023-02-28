import React, { useEffect, useState } from "react";
import "./App.css";
import {
  DataBox,
  DaysBox,
  MainBox,
  WeatherAppBox,
} from "./components/mainComponents/components";
import Header from "./components/header/Header";
import {
  CustomSelector,
  CustomTextField,
  FormBox,
  MarginBox,
  MenuBox,
} from "./components/menu/components";
import BigWeatherBox from "./components/weatherBox/BigWeatherBox";
import SmallWeatherBox from "./components/weatherBox/SmallWeatherBox";
import { useQuery } from "react-query";
import { Form } from "react-final-form";
import { Select, TextField } from "mui-rff";
import { Button, MenuItem } from "@mui/material";
import {
  getGeoByCityName,
  getWeatherBitByCityName,
  getWeatherByGeo,
} from "./api/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [api, setApi] = useState("");
  const [curentDay, setCurentDay] = useState(0);
  const [geo, setGeo] = useState({ latitude: 0, longitude: 0 });
  const [data, setData] = useState<
    {
      day: string;
      temp: number;
      max_temp: number;
      min_temp: number;
      pres?: number;
      humidity?: number;
      pop?: number;
      apparent_temp: number;
      uv_index: number;
      windspeed: number;
    }[]
  >([]);

  const geoQuery = useQuery(["geo", city], () => getGeoByCityName(city), {
    enabled: api === "OpenMeteo",
  });

  const weatherBitQuery = useQuery(
    ["weatherBit", city],
    () => getWeatherBitByCityName(city),
    {
      enabled: api === "WeatherBit",
    }
  );

  const openMeteoQuery = useQuery(
    ["openMeteo", geo],
    () => getWeatherByGeo(geo.latitude, geo.longitude),
    {
      enabled:
        (geo.latitude !== 0 || geo.longitude !== 0) && api !== "WeatherBit",
    }
  );

  navigator.geolocation.getCurrentPosition((position) => {
    setGeo({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });

  const getFromOpenMeteo = (openMeteoQuery: any) => {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push({
        day: openMeteoQuery.data.daily.time[i],
        temp: Math.round(
          (openMeteoQuery.data.daily.temperature_2m_max[i] +
            openMeteoQuery.data.daily.temperature_2m_min[i]) /
            2
        ),
        max_temp: openMeteoQuery.data.daily.temperature_2m_max[i],
        min_temp: openMeteoQuery.data.daily.temperature_2m_min[i],
        apparent_temp: Math.round(
          (openMeteoQuery.data.daily.apparent_temperature_max[i] +
            openMeteoQuery.data.daily.apparent_temperature_min[i]) /
            2
        ),
        uv_index: openMeteoQuery.data.daily.uv_index_max[i],
        windspeed: openMeteoQuery.data.daily.windspeed_10m_max[i],
      });
    }
    return arr;
  };

  const getFromWeatherBit = (weatherBitQuery: any) => {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push({
        day: weatherBitQuery.data.data[i].valid_date,
        temp: weatherBitQuery.data.data[i].temp,
        max_temp: weatherBitQuery.data.data[i].max_temp,
        min_temp: weatherBitQuery.data.data[i].min_temp,
        pres: weatherBitQuery.data.data[i].pres,
        humidity: weatherBitQuery.data.data[i].rh,
        pop: weatherBitQuery.data.data[i].pop,
        apparent_temp: Math.round(
          (weatherBitQuery.data.data[i].app_max_temp +
            weatherBitQuery.data.data[i].app_min_temp) /
            2
        ),
        uv_index: weatherBitQuery.data.data[i].uv,
        windspeed: weatherBitQuery.data.data[i].wind_spd,
      });
    }
    return arr;
  };

  const handleSubmit = (values: any) => {
    setCity(values.city);
    if (values.api === "OpenMeteo") {
      setApi("OpenMeteo");
    } else {
      setApi("WeatherBit");
    }
  };

  useEffect(() => {
    if (geoQuery.isSuccess) {
      setGeo({
        latitude: geoQuery.data.results[0].latitude,
        longitude: geoQuery.data.results[0].longitude,
      });
    }
  }, [geoQuery.isSuccess]);

  useEffect(() => {
    if (weatherBitQuery.isSuccess) {
      setData(getFromWeatherBit(weatherBitQuery));
    }
  }, [weatherBitQuery.isSuccess]);

  useEffect(() => {
    if (openMeteoQuery.isSuccess) {
      setData(getFromOpenMeteo(openMeteoQuery));
    }
  }, [openMeteoQuery.isSuccess]);

  return (
    <WeatherAppBox>
      <Header />
      <MainBox>
        <MenuBox>
          <Form
            onSubmit={handleSubmit}
            keepDirtyOnReinitialize
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <FormBox>
                  <MarginBox>
                    <CustomTextField
                      label="Город"
                      name="city"
                      required={true}
                    />
                  </MarginBox>
                  <MarginBox>
                    <CustomSelector name="api" label="API">
                      <MenuItem value="OpenMeteo">OpenMeteo</MenuItem>
                      <MenuItem value="WeatherBit">WeatherBit</MenuItem>
                    </CustomSelector>
                  </MarginBox>
                  <MarginBox>
                    <Button type="submit" variant="outlined">
                      Поиск
                    </Button>
                  </MarginBox>
                </FormBox>
              </form>
            )}
          />
        </MenuBox>
        <DataBox>
          <BigWeatherBox data={data ? data[curentDay] : undefined} api={api} />
          <DaysBox>
            {data?.map((item) => (
              <SmallWeatherBox data={item} />
            ))}
          </DaysBox>
        </DataBox>
      </MainBox>
    </WeatherAppBox>
  );
}

export default App;
