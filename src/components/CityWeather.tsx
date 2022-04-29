import "./CityWeather.css";
import { CityCurrentWeatherApiResponse } from "../models/APIModels";
import { Clock } from "./Clock";
import { Fragment, useEffect, useState } from "react";
import { GetCurrentWeather } from "../api/weather";

type CityWeatherProps = {
  city: string;
};

export function CityWeather(props: CityWeatherProps) {
  const [cityWeather, setCityWeather] = useState({} as CityCurrentWeatherApiResponse);

  useEffect(()=>{
    const fetchWeather = async () => GetCurrentWeather(props.city);
    fetchWeather().then(setCityWeather).catch();
  }, [ props.city ]);

  if (cityWeather.current === undefined
    || props.city === undefined
    || props.city === "") {
    return null;
  }
  return (
    <Fragment>
      <img
        className="CityWeatherIcon"
        title="Weather Icon"
        src={cityWeather.current.condition.icon}
        />
      <h1>{cityWeather.location.name}</h1>
      <h2>{cityWeather.location.country}</h2>
      <Clock timezone={cityWeather.location.tz_id}/>
    </Fragment>
  );
}
