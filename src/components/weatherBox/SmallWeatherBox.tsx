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

function getDayOfWeek(date: string) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][dayOfWeek];
}

export default function SmallWeatherBox(props: IProps) {
  return (
    <SmallBox>
      <SmallBoxText>{getDayOfWeek(props.data?.day!)}</SmallBoxText>
      <SmallBoxText>{props.data?.max_temp}°C</SmallBoxText>
      <SmallBoxText>{props.data?.min_temp}°C</SmallBoxText>
    </SmallBox>
  );
}
