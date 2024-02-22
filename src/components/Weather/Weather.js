import React, { useEffect, useState } from "react";
import useGetWeather from "./hooks/useGetWeather";
import Chart from "../Chart/Chart";

const Weather = () => {
  const [currentBrowserLatLong, setCurrentBrowserLatLong] = useState();
  const { weatherInfo } = useGetWeather(currentBrowserLatLong);
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setCurrentBrowserLatLong({ lat: latitude, long: longitude });
    }
    getLocation();
  }, []);
  // console.log(currentBrowserLatLong);
  return (
    <div className=" border-2 border-black">
      <div className="flex justify-center">
        <div>
          <h3>{weatherInfo?.location?.name}</h3>
          <h1>{weatherInfo?.current?.temp_c}</h1>
          <span>{weatherInfo?.current?.condition.text}</span>
          <img src={weatherInfo?.current.condition.icon} alt="" />
        </div>

        <Chart />
      </div>
    </div>
  );
};

export default Weather;
