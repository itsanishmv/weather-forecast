import React, { useEffect, useState } from "react";
import { apiBaseUrl, apiKey } from "../../../constants";
function useGetWeather() {
  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    async function getWeatherinfo() {
      const promise = await fetch(
        `${apiBaseUrl}/v1/current.json?q=11.9716965%2C75.422819%20&key=${apiKey}`
      );
      const response = await promise.json();
      setWeatherInfo(response);
    }
    getWeatherinfo();
  }, []);

  return { weatherInfo };
}

export default useGetWeather;
