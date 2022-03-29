import React from 'react'

const HourlyForecast = ({ forecastInfo }) => {

  return (
    <div className='hourly-forecast'
      style={{ display: "flex", alignItems: "centre",  overflow: "auto", whitespace: "nowrap" }}
      >
      {forecastInfo.map((info) => (
      // for each index of the prop passed through (API hourly data)
      // create div with all necessary information
        <div className ="hourly" key={info.time_epoch}>
          <div className='forecast-hour'>{info.time.substring(11)}</div>
          <br></br>
          <div className='forecast-hour-temp'>{info.temp_c}°</div>
          <br></br>
          <div className='forecast-hour-condition'>{info.condition.text}</div>
        </div>
      ))}
    </div>
  )
}

export default HourlyForecast