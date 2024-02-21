import React, { useEffect, useState } from "react";
import useGetWeather from "./hooks/useGetWeather";
const Weather = () => {
  const { weatherInfo } = useGetWeather();

  console.log(weatherInfo);
  return (
    <div className=" border-2 border-black">{weatherInfo?.location?.name}</div>
  );
};

export default Weather;
