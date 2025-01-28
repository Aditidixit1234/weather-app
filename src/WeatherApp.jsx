import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InformationBox from './InformationBox'
function WeatherApp() {
    const [weatherInformation,setWeather]=useState({
        city:'Delhi',
        feelsLike:11.45,
        humidity:82,
        temp:12.05,
        tempMax:12.05,
        tempMin:12.05,
        weather:"mist",
    });
    let update=(newInformation)=>{
        setWeather(newInformation);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <SearchBox update={update}/>
      <InformationBox information={weatherInformation}/>
    </div>
  )
}

export default WeatherApp
