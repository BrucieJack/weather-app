import axios from "axios";

export const weatherBitApi = axios.create({
  baseURL:
    "https://api.weatherbit.io/v2.0/forecast/daily?key=eb8a4348e45a4855b5e385ef348b30a1",
});

export const OpenMeteoApi = axios.create({
  baseURL:
    "https://api.open-meteo.com/v1/forecast?&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&current_weather=true&timezone=auto",
});

export const OpenMeteoGeoApi = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1/search?count=1",
});

export const getWeatherBitByCityName = async (city: string) => {
  const response = await weatherBitApi.get(``, {
    params: {
      city,
    },
  });
  return response.data;
};

export const getGeoByCityName = async (name: string) => {
  const response = await OpenMeteoGeoApi.get(``, {
    params: {
      name,
    },
  });
  return response.data;
};

export const getWeatherByGeo = async (latitude: number, longitude: number) => {
  const response = await OpenMeteoApi.get(``, {
    params: {
      latitude,
      longitude,
    },
  });
  return response.data;
};
