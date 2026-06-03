import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/Weather/Weather";
import "./App.css";

function App() {
  return(
    <div className="app">
       <Header />

       <main className="dashboard-content">
       <SearchBar />
       <WeatherCard />
       </main>
      
    </div>
  )
   
}
export default App;
