import React from 'react'
import Sunrise from '../assets/main/Sunrise.png'
import Sunset from '../assets/main/Sunset.png'

const Middle = ({ weatherTemp }) => {

    // function to determine what clothes is recommended to wear
    // based on the condition and temperature
    const clothesCheck = (temp, condition) => {
        if (condition !== "Sunny") {
            return "Jacket"
        }
        if (temp > 10 && temp < 15) {
            return "Hoodie"
        } else if (temp <= 10) {
            return "Coat"
        } else if (temp >= 15) {
            return "T-Shirt"
        }
    }

  return (
    <div className="middle">
                {/* Display sunrise and sunset times */}
                <div className="sunrise-sunset">
                    <div className="sunrise">
                        <p>Sunrise</p>
                        {/* Sunrise icon */}
                        <img src={Sunrise} className='sunrise-img' alt='sunrise'/>
                        <p>{weatherTemp[7]}</p>
                    </div>
                    <div className="sunset">
                        <p>Sunset</p>
                        {/* Sunset icon */}
                        <img src={Sunset} className='sunset-img' alt='sunset'/>
                        <p>{weatherTemp[8]}</p>
                        </div>
                </div>
                {/* Display clothes recommendation */}
                <div className="clothes-recommender">
                    <p>Recommended: {clothesCheck(weatherTemp[0], weatherTemp[2])}</p>
                </div>
            </div>
  )
}

export default Middle