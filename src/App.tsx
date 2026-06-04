import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/Weather/Weather";
import type { Weather } from "./types/weather.types";
import { getLocationCoordinates } from "./services/geocodingService";
import { getWeatherByCoordinates } from "./services/weatherService";
import WeatherHighlights from "./components/WeatherHighlights/WeatherHighlights";
import type { ForecastDay } from "./types/weather.types";
import Forecast from "./components/Forecast/Forecast";
import "./App.css";

function App() {
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState<Weather>({
    location: "",
    temperature: 0,
    condition: "",
    humidity: 0,
    windSpeed: 0,
  });
  const handleLocationSearch = async (location: string) => {
    try {
      setLoading(true);
      setError("");
    
    const locationData = await getLocationCoordinates(location);
    
    if (!locationData.results || locationData.results.length === 0) {
      setError("Location not found. Please enter a valid Ireland location.");
      return;
    }
    const irelandResult = locationData.results.find(
      (place: any) => place.country === "Ireland"
    );
    
    if (!irelandResult) {
      setError("Please enter a valid Ireland location only.");
      return;
    }

    const weatherApiData = await getWeatherByCoordinates(
      irelandResult.latitude,
      irelandResult.longitude
    );
  
  
  const forecastData: ForecastDay[] =
   weatherApiData.daily.time.map(
    (date:string, index: number) => ({
      date,
      maxTemp:
       weatherApiData.daily.temperature_2m_max[index],
      minTemp:
       weatherApiData.daily.temperature_2m_min[index],
    })
   );
   setForecast(forecastData);

    setWeather({
      location: irelandResult.name,
      temperature: weatherApiData.current.temperature_2m,
      condition: "Current Weather",
      humidity: weatherApiData.current.relative_humidity_2m,
      windSpeed: weatherApiData.current.wind_speed_10m,
    });
  } catch {
    setError("Something went wrong. Please try again.");
  } finally{
    setLoading(false);
  }
};
  
  return(
    <div className="app">
       <Header />

       <main className="dashboard-content">
       <SearchBar onSearch={handleLocationSearch}/>

{loading && <p className="loading-text">Loading weather...</p>}
{error && <p className="error-text">{error}</p>}

{weather.location && (
  <>
    <div className="weather-layout">
      <WeatherCard weather={weather} />

      <WeatherHighlights
        humidity={weather.humidity}
        windSpeed={weather.windSpeed}
      />
    </div>

    <Forecast forecast={forecast} />
  </>
)}
       </main>
      
    </div>
  )
   
}
export default App;
