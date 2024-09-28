import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww";
    const HOT_URL = "https://media.istockphoto.com/id/1591840334/photo/hot-winter-sun.jpg?s=1024x1024&w=is&k=20&c=qns2hrZdV4Cp-C_KOmyx2VJkcMc_r1ifLKyF0BFMOYo=";
    const RAINY_URL = "https://images.unsplash.com/photo-1561553590-267fc716698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1714039656237-4c8bdd2ef26d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";

    return (
        <div className='InfoBox'>
            
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= { info.humidity>90 ? RAINY_URL : (info.temp<15 ? COLD_URL : HOT_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            { info.humidity>90 
                            ? <ThunderstormIcon/> 
                            : (info.temp<15 ? <AcUnitIcon/> : <WbSunnyIcon/>)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>
                                <p>Temperature: {info.temp}&deg;C</p>
                                <p>Humidity: {info.humidity}</p>
                                <p>Min Temp: {info.tempMin}</p>
                                <p>Max Temp: {info.tempMax}</p>
                                <p>The weather canbe described as <i>{info.weather}</i> & feels like {info.feelsLike}&deg;C</p>
                            </div>
                        </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </div>
        </div>
    );
}