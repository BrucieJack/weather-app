import axios from "axios";

// export const weatherBitApi = axios.create({
//   baseURL:
//     "https://api.weatherbit.io/v2.0/forecast/daily?key=eb8a4348e45a4855b5e385ef348b30a1",
// });

// export const OpenMeteoApi = axios.create({
//   baseURL:
//     "https://api.open-meteo.com/v1/forecast?latitude=53.90&longitude=27.57&hourly=temperature_2m",
// });

export const getWeatherBitByCityName = async (city: string) => {
  const response = await weatherBitApi.get(`&city=${city}`, {});
  return response.data;
};
