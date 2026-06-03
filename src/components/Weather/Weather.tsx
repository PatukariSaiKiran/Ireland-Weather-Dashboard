import "./WeatherCard.css";
import { type Weather } from "../../types/weather.types";

type WeatherCardProps = {
    weather: Weather;
}

function WeatherCard({ weather } : WeatherCardProps) {
  return (
    <section className="weather-card">
        <div className="weather-icon">🌦️</div>

        <h2>{weather.location}</h2>

        <p className="weather-condition">
            {weather.condition}
        </p>

        <h3 className="weather-temperature">
            {weather.temperature}°C
        </h3>

        <p>Humidity: {weather.humidity}%</p>

          <p>Wind: {weather.windSpeed} km/h</p>
    </section>
  );
}

export default WeatherCard;