import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/Weather/Weather";
import "./App.css";

function App() {
  const weatherData = {
    location: "Dublin",
    temperature: 16,
    condition: "Partly Cloudy",
    humidity: 75,
    windSpeed: 12,
  };
  return(
    <div className="app">
       <Header />

       <main className="dashboard-content">
       <SearchBar />
       <WeatherCard weather={weatherData}/>
       </main>
      
    </div>
  )
   
}
export default App;
