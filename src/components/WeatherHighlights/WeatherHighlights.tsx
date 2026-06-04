import "./WeatherHighlights.css";

type WeatherHighlightsProps = {
  humidity: number;
  windSpeed: number;
};

function WeatherHighlights({ humidity, windSpeed }: WeatherHighlightsProps) {
  return (
    <section className="weather-highlights">
      <h2>Today&apos;s Highlights</h2>

      <div className="highlights-grid">
        <div className="highlight-card">
          <p>Humidity</p>
          <h3>{humidity}%</h3>
        </div>

        <div className="highlight-card">
          <p>Wind Speed</p>
          <h3>{windSpeed} km/h</h3>
        </div>
      </div>
    </section>
  );
}

export default WeatherHighlights;