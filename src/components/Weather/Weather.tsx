import "./WeatherCard.css";

function WeatherCard() {
  return (
    <div className="weather-card">
      <div className="weather-icon">
        🌦️
      </div>

      <h2>Dublin</h2>

      <h1>16°C</h1>

      <p>Partly Cloudy</p>
    </div>
  );
}

export default WeatherCard;