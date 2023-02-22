import { SmallBox, SmallBoxText } from "./components";

interface IProps {
  data?: {
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
  };
}

export default function SmallWeatherBox(props: IProps) {
  return (
    <SmallBox>
      <SmallBoxText>Пн</SmallBoxText>
      <SmallBoxText>20°C</SmallBoxText>
    </SmallBox>
  );
}
