import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="bg-blue-100 p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">Current Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default CurrentWeather;
