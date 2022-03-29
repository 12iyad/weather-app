import React from 'react'
import EmptyRain from '../assets/main/EmptyDroplet.png'
import FullRain from '../assets/main/FullDroplet.png'

const ThreeDayForecast = ({ threedayForecastInfo }) => {

  // Data to determine what the day of the week it is for each day of forecast
  var today = new Date()
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  return (
    <div className="three-day-forecast">
      <table className="forecastTable">
        {threedayForecastInfo.map((info) => (
          // for every index of prop, add day of week, chance of rain, and the min/max temperature
            <tbody key={info.date_epoch}>
              <tr>
                <td className="date">{today.getDay() === new Date(info.date).getDay() ? 
                  "Today" : days[(new Date(info.date).getDay())]}</td>
                <td className="rain">{
                    info.daily_chance_of_rain > 30 ? 
                    // Rain icons depending on chance of rain
                    <img src={FullRain} className='full-rain' alt='full-rain-icon'></img> : 
                    <img src={EmptyRain} className='empty-rain' alt='empty-rain-icon'></img>
                  }
                <span> {info.day.daily_chance_of_rain}%</span></td>
                {/* Min Max for the day */}
                <td className='min-max'>{info.day.mintemp_c}° / {info.day.maxtemp_c}°</td>
              </tr>
            </tbody>
        ))}
      </table>
    </div>
  )
}

export default ThreeDayForecast