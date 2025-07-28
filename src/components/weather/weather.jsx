import WeatherList from "./weatherListItem";
import "./Weather.css"

const Weather = (props) => {

  return(
    <>
      {props.weatherForecasts.map((weather) => 
        <WeatherList 
          day= {weather.day}
          img= {weather.img}
          imgAlt= {weather.imgAlt}
          conditions= {weather.conditions}
          time= {weather.time}
        />
      )}
    </>
  )

}

export default Weather;