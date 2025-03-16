import React, { useState, useEffect, useCallback } from 'react';
import "./Weather.css";
import { FaSearch, FaWind } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  const API_KEY = "e555ad66a27c5df9296761b8ade35d73";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  // Handle input change
  function handleOnChange(event) {
    setCity(event.target.value);
  }

  // Fetch data from OpenWeather API
  const fetchData = useCallback(async () => {
    setWeather(null);
    setError('');

    if (!city) return;

    try {
      let response = await fetch(url);
      let output = await response.json();
      if (response.ok) {
        setWeather(output);
      } else {
        setError("No data found, please enter a valid city name");
      }
    } catch (error) {
      setError("Failed to fetch data");
    }
  }, [city]);

  // Debounced API call - will trigger fetchData after 1 second of user inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      if (city) {
        fetchData();
      }
    }, 1000);

    // Cleanup function to clear the timer when city changes or component unmounts
    return () => clearTimeout(timer);
  }, [city, fetchData]);

  // Convert temperature from Celsius to Fahrenheit (only when necessary)
  const convertTemperature = (tempInCelsius) => {
    if (unit === 'imperial') {
      return (tempInCelsius * 9 / 5) + 32;
    }
    return tempInCelsius;
  };

  // Handle Enter key press for search
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div className='container'>
      <div className="city">
        <div className="city-inner">
          <input
            type="text"
            value={city}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
            placeholder='Enter city name'
          />
          <div className="unit-selector">
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="metric">°C</option>
              <option value="imperial">°F</option>
            </select>
          </div>
        </div>
        <button onClick={() => fetchData()}>
          <FaSearch />
        </button>
      </div>

      {error && <p className='error-message'>{error}</p>}

      {weather && weather.weather && !error &&
        <div className='content'>
          <div className="weather-image">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <h3 className='desc'>{weather.weather[0].description}</h3>
          </div>

          <div className="weather-temp">
            <h2>{convertTemperature(weather.main.temp).toFixed(1)} <span>&deg;{unit === 'metric' ? 'C' : 'F'}</span></h2>
          </div>

          <div className="weather-city">
            <div className="location">
              <MdLocationOn />
            </div>
            <p>{weather.name}, <span>{weather.sys.country}</span></p>
          </div>

          <div className="weather-stats">
            <div className="wind">
              <div className="wind-icon">
                <FaWind />
              </div>
              <h3 className='wind-speed'>{weather.wind.speed} <span>Km/h</span></h3>
              <h3 className='wind-heading'>Wind Speed</h3>
            </div>

            <div className="humidity">
              <div className="humidity-icon">
                <WiHumidity />
              </div>
              <h3 className='humidity-percent'>{weather.main.humidity} <span>%</span></h3>
              <h3 className='humidity-heading'>Humidity</h3>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Weather;