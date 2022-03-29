import React from 'react'




const Bottom = ({weatherTemp}) => {
    return (
        <div className='bottom'>
            <div className="extraInfo">
                <table className="extraTable">
                    <tbody>
                        {/* Humidity */}
                        <tr>
                            <td>Humidity</td>
                            <td className="humidity">{weatherTemp[5]}%</td>
                        </tr>
                        {/* Windspeed */}
                        <tr>
                            <td>Wind</td>
                            <td className="wind">{weatherTemp[6]} mp/h</td>
                        </tr>
                        {/* UV Index */}
                        <tr>
                            <td>UV Index</td>
                            <td className="uv">{weatherTemp[9]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Bottom