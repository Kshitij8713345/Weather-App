import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import WeatherApp from "./WeatherApp";
import './App.css';
import bg from './assets/img1.webp'; // ✅ background image import

const appStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

function App() {
  return (
    <div style={appStyle}>
      <WeatherApp />
    </div>
  );
}

export default App;
