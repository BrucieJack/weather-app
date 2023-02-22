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
        <Temp>20°C</Temp>
      </TempBox>
      <AdvBox>
        <AdvColumn>
          <AdvName>Ощущается</AdvName>
          <AdvValue>20°C</AdvValue>
          <AdvName>Вероятность дождя</AdvName>
          <AdvValue>1%</AdvValue>
          <AdvName>Скорость ветра</AdvName>
          <AdvValue>7.4 км/ч</AdvValue>
        </AdvColumn>
        <AdvColumn>
          <AdvName>Влажность</AdvName>
          <AdvValue>61%</AdvValue>
          <AdvName>Давление</AdvName>
          <AdvValue>1026mbar</AdvValue>
          <AdvName>УФ-индекс</AdvName>
          <AdvValue>0</AdvValue>
        </AdvColumn>
      </AdvBox>
    </BigBox>
  );
}
