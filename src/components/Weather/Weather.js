import React, { useEffect, useState } from "react";
import useGetWeather from "./hooks/useGetWeather";

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
  console.log(currentBrowserLatLong);
  return (
    <div className=" border-2 border-black">{weatherInfo?.location?.name}</div>
  );
};

export default Weather;
