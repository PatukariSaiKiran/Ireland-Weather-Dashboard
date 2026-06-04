import type { ForecastDay } from "../../types/weather.types";
import "./Forecast.css";

type ForecastProps = {
  forecast: ForecastDay[];
};

function Forecast({ forecast }: ForecastProps) {
  return (
    <section className="forecast-section">
      <h2>7-Day Forecast</h2>

      <div className="forecast-list">
        {forecast.map((day) => (
          <div className="forecast-card" key={day.date}>
           <p>
            {new Date(day.date).toLocaleDateString("en-IE", {
             weekday: "short",
            })}
            </p>
            <h3>{day.maxTemp}°C</h3>
            <span>{day.minTemp}°C</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast;