import WeatherList from "./weatherList";
import "./weather.css";

const Weather = (props) => {
  return(
    <>
    {props.weatherForecasts.map((item) => 
    <WeatherList 
    day={item.day}
    img={item.img}
    imgAlt={item.imgAlt}
    conditions={item.conditions}
    time={item.time}
    />
  )
  }
    </>
  )
}

export default Weather;