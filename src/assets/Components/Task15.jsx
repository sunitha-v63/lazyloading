import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

const CurrentWeather = lazy(() =>
  import(/* webpackChunkName: "CurrentWeatherChunk" */ './CurrentWeather')
);
const Forecast = lazy(() =>
  import(/* webpackChunkName: "ForecastChunk" */ './Forecast')
);

const Task15 = () => {
  const [city, setCity] = useState('London');
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY'; // 🔁 Replace this with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      setError(null);
      const [current, forecast] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      ]);
      setCurrentData(current.data);
      setForecastData(forecast.data);
    } catch (err) {
      setError('City not found or API error');
      setCurrentData(null);
      setForecastData(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div>
        <h6>task13</h6>
        <h3>Chunk naming</h3>
      <h3>Weather App</h3>
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      {error && <p style={{ color: 'blue' }}>{error}</p>}

      <Suspense fallback={<p>Loading current weather...</p>}>
        {currentData && <CurrentWeather data={currentData} />}
      </Suspense>

      <Suspense fallback={<p>Loading forecast...</p>}>
        {forecastData && <Forecast data={forecastData} />}
      </Suspense>
    </div>
  );
};

export default Task15;
