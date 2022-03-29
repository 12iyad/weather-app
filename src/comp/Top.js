import React from 'react'
import Middle from './Middle'

const Top = ({ weatherTemp }) => {
    
    // function to determine the day of the week that it is currently
    const displayDay = () => {
        var today = new Date()
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return days[today.getDay()]
    }
    
    return (
        <div className='top'>
            <div className="current">
                {/* Display the current Location */}
                <div className='location'>
                    <p>{weatherTemp[3]}</p>
                </div>
                {/* Display current temperature and description */}
                <div className="temp">
                    <p>{weatherTemp[0]}<span className="degree">°</span><span className="tempdescription">{weatherTemp[2]}</span></p>
                </div>
                {/* Display the feels-like temperature */}
                <div className="feels">
                    <p>Feels like {weatherTemp[1]}°</p>
                </div>
                {/* Display day of the week */}
                <div className="day-of-week">{displayDay()}</div>
                
            </div>
            <Middle weatherTemp={weatherTemp} />
        </div>
    )
}
export default Top