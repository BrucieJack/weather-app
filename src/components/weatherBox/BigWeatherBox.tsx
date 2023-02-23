import {
  AdvBox,
  AdvColumn,
  AdvName,
  AdvValue,
  BigBox,
  Temp,
  TempBox,
} from "./components";

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
  api?: string;
}

export default function BigWeatherBox(props: IProps) {
  return (
    <BigBox>
      <TempBox>
        <Temp>{props.data?.temp}°C</Temp>
      </TempBox>
      <AdvBox>
        <AdvColumn>
          <AdvName>Ощущается</AdvName>
          <AdvValue>{props.data?.apparent_temp}°C</AdvValue>
          {props.api === "WeatherBit" && (
            <>
              <AdvName>Вероятность дождя</AdvName>
              <AdvValue>{props.data?.pop}%</AdvValue>
            </>
          )}
          <AdvName>Скорость ветра</AdvName>
          <AdvValue>{props.data?.windspeed} км/ч</AdvValue>
        </AdvColumn>
        <AdvColumn>
          {props.api === "WeatherBit" && (
            <>
              <AdvName>Влажность</AdvName>
              <AdvValue>{props.data?.humidity}%</AdvValue>
              <AdvName>Давление</AdvName>
              <AdvValue>{props.data?.pres}mbar</AdvValue>
            </>
          )}
          <AdvName>УФ-индекс</AdvName>
          <AdvValue>{props.data?.uv_index}</AdvValue>
        </AdvColumn>
      </AdvBox>
    </BigBox>
  );
}
