import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/Weather/Weather";
import type { Weather } from "./types/weather.types";
import { getLocationCoordinates } from "./services/geocodingService";
import { getWeatherByCoordinates } from "./services/weatherService";
import "./App.css";

function App() {
  const [weather, setWeather] = useState<Weather>({
    location: "",
    temperature: 0,
    condition: "",
    humidity: 0,
    windSpeed: 0,
  });
  const handleLocationSearch = async (location: string) => {
    const locationData = await getLocationCoordinates(location);

    const firstResult = locationData.results[0];

    const weatherApiData = await getWeatherByCoordinates(
      firstResult.latitude,
      firstResult.longitude
    );

    setWeather({
      location: firstResult.name,
      temperature: weatherApiData.current.temperature_2m,
      condition: "Current Weather",
      humidity: weatherApiData.current.relative_humidity_2m,
      windSpeed: weatherApiData.current.wind_speed_10m,
    });
  };

  
  return(
    <div className="app">
       <Header />

       <main className="dashboard-content">
       <SearchBar onSearch={handleLocationSearch}/>
       <WeatherCard weather={weather}/>
       </main>
      
    </div>
  )
   
}
export default App;
