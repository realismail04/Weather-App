import './App.css';
import { Header } from './Components/Header/Header';
import { WeatherApp } from './Components/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherApp/>
    </div>
  );
}

export default App;
