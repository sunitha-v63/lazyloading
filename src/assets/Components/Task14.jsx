import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

const CurrentWeather = lazy(() => import('./CurrentWeather'));
const Forecast = lazy(() => import('./Forecast'));

const Task14 = () => {
  const [city, setCity] = useState('London');
  const [currentData, setCurrentData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const API_KEY = 'YOUR_API_KEY';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const [currentRes, forecastRes] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        ]);
        setCurrentData(currentRes.data);
        setForecastData(forecastRes.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <>
    <h6>mini project</h6>
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Weather App</h1>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Suspense fallback={<p>Loading current weather...</p>}>
        {currentData && <CurrentWeather data={currentData} />}
      </Suspense>
      <Suspense fallback={<p>Loading forecast...</p>}>
        {forecastData && <Forecast data={forecastData} />}
      </Suspense>
    </div>
    </>
  );
};

export default Task14;
