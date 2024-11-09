import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Dhaka",
        feelsLike: 299.14,
        humidity: 80,
        temp: 30,
        tempMax: 230,
        tempMin: 200,
        weather: "rainy"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div  style={{textAlign: "center"}}>
            <h2>Find Your Weather</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}