import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  DataBox,
  DaysBox,
  MainBox,
  WeatherAppBox,
} from "./components/mainComponents/components";
import Header from "./components/header/Header";
import { FormBox, MarginBox, MenuBox } from "./components/menu/components";
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
  >();

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
      enabled: geo.latitude !== 0 || geo.longitude !== 0,
    }
  );

  console.log(weatherBitQuery);
  console.log(geoQuery);
  console.log(openMeteoQuery);

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
    }
  }, [weatherBitQuery.isSuccess]);

  useEffect(() => {
    if (openMeteoQuery.isSuccess) {
    }
  }, [openMeteoQuery.isSuccess]);

  return (
    <WeatherAppBox>
      <Header />
      <MainBox>
        <MenuBox>
          <FormBox>
            <Form
              onSubmit={handleSubmit}
              keepDirtyOnReinitialize
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <MarginBox>
                    <TextField label="Город" name="city" required={true} />
                  </MarginBox>
                  <MarginBox>
                    <Select name="api" label="API">
                      <MenuItem value="OpenMeteo">OpenMeteo</MenuItem>
                      <MenuItem value="WeatherBit">WeatherBit</MenuItem>
                    </Select>
                  </MarginBox>
                  <MarginBox>
                    <Button type="submit" variant="outlined">
                      Поиск
                    </Button>
                  </MarginBox>
                </form>
              )}
            />
          </FormBox>
        </MenuBox>
        <DataBox>
          <BigWeatherBox data={data ? data[curentDay] : undefined} api={api} />
          <DaysBox>
            {data?.map((item) => (
              <SmallWeatherBox />
            ))}
          </DaysBox>
        </DataBox>
      </MainBox>
    </WeatherAppBox>
  );
}

export default App;
