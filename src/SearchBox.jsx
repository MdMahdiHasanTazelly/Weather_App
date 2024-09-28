import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "6f201184d228ec873622354ca637c2da";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();

        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setErr(true);
        }
    }


    return (
        <div className='SearchBox'>
            
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    value={city}
                    required
                    onChange={handleChange}
                />
                <br /><br />
                <Button
                    variant="contained"
                    type='submit'
                >Search</Button>
            </form>
            {err && <p style={{color: "red", fontWeight: "bolder"}}>No such place</p>}
            
        </div>
    );
}