import React, { useEffect, useState } from "react";
import { apiBaseUrl, apiKey } from "../../../constants";
function useGetWeather(currentBrowserLatLong) {
  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    async function getWeatherinfo() {
      try {
        if (currentBrowserLatLong.lat !== undefined) {
          const promise = await fetch(
            `${apiBaseUrl}/v1/current.json?q=${currentBrowserLatLong?.lat}%2C${currentBrowserLatLong?.long}%20&key=${apiKey}`
          );
          const response = await promise.json();
          setWeatherInfo(response);
        }
      } catch (error) {
        console.log(`error ${error}`);
      }
    }
    getWeatherinfo();
  }, [currentBrowserLatLong?.lat]);

  return { weatherInfo };
}

export default useGetWeather;
