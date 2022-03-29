import React, { useState, useEffect } from 'react'
import Top from './comp/Top'
import Bottom from './comp/Bottom'
import HourlyForecast from './comp/HourlyForecast'
import ThreeDayForecast from './comp/ThreeDayForecast'


function App() {
  // create useStates for necessary information
  const [weatherTemp, setWeatherTemp] = useState([])
  const [forecastInfo, setForecastInfo] = useState([])
  const [threedayForecastInfo, setThreeDayForecastInfo] = useState([])
  const [apiLocation, setApiLocation] = useState('London')
  
  useEffect(() => {

    const getWeather = async () => {
      const weatherServer = await fetchWeather()
      console.log("All data", weatherServer)

      // this use state stores current data for the day, including sunrise and sunset times from forecast section of API
      setWeatherTemp([
        weatherServer.current.temp_c, 
        weatherServer.current.feelslike_c, 
        weatherServer.current.condition.text, 
        weatherServer.location.name, 
        weatherServer.current.cloud, 
        weatherServer.current.humidity, 
        weatherServer.current.wind_mph, 
        weatherServer.forecast.forecastday[0].astro.sunrise,
        weatherServer.forecast.forecastday[0].astro.sunset,
        weatherServer.current.uv
      ])
      
      // this use state stores all data relating to the forecast section, including the current day
      setThreeDayForecastInfo([
        weatherServer.forecast.forecastday[0], 
        weatherServer.forecast.forecastday[1], 
        weatherServer.forecast.forecastday[2]
      ])

      // this use state stores all data relating to the hourly forecast for the day
      setForecastInfo(weatherServer.forecast.forecastday[0].hour)
    }
    getWeather()
  }, [])

  // code relating to the necessary API call
  const fetchWeather = async () => {
    const apiKey = 'cebaa3686a1d4cfdac3150729221403'
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${apiLocation}&days=10&aqi=no&alerts=no`
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  return (
    <div className="App">
      <div className="container">
        <Top weatherTemp = {weatherTemp} />
        <HourlyForecast forecastInfo= {forecastInfo} />
        <ThreeDayForecast threedayForecastInfo = {threedayForecastInfo}/>
        <Bottom weatherTemp = {weatherTemp}/>
      </div>
    </div>
  )
}

export default App;
