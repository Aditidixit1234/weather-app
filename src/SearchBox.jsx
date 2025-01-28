import react, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import InformationBox from './InformationBox';
function SearchBox({update}) {
  
  let [city,setCity]=useState("");
  let[error,setError]=useState(false);
  const url="https://api.openweathermap.org/data/2.5/weather";
  const key="00f5b24db8601e0a7a008ae3d11b206d";
  

let getWeather=async()=>{
  try{
  let response=await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
  let jsonResponse =await response.json();
  console.log(jsonResponse);
  let result={
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,
  }
  console.log(result);
  return result;
} catch(err){
  throw error;
}

};

   
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
   let handleSubmit=async(evt)=>{
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newInformation=await getWeather();
       update(newInformation);
    }catch(err){
setError(true);
    }
    }
  return (
    <div className='SearchBox'>
      
      <form onSubmit={handleSubmit}>
        <h3>Search for the weather</h3>
        <TextField id="City" label="City name" variant="outlined" required value={city} onChange={handleChange}
         />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
        Search
      </Button>
      {error&&<p>NO SUCH PLACE EXISTS</p>}
  
      </form>
    </div>
  )
}

export default SearchBox
