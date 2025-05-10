import React from 'react';

const Forecast = ({ data }) => {
  const dailyForecast = data.list.filter((_, index) => index % 8 === 0); // Every 24 hours

  return (
    <div className="bg-yellow-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">5-Day Forecast</h2>
      <div className="grid gap-2">
        {dailyForecast.map((item, idx) => (
          <div key={idx} className="border p-2 rounded bg-white">
            <p><strong>{item.dt_txt.split(' ')[0]}</strong></p>
            <p>Temp: {item.main.temp}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
