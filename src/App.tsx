import "./App.css";
import { CityCurrentTimeApiResponse } from "./models/APIModels";

type AppProps = {
  forecast: String;
};

const STATIC_API_RESPONSE: CityCurrentTimeApiResponse = {
  location: {
    name: "Guatemala City",
    region: "Guatemala",
    country: "Guatemala",
    lat: 14.62,
    lon: -90.53,
    tz_id: "America/Guatemala",
    localtime_epoch: 1651193130,
    localtime: new Date("2022-04-28 18:45"),
  },
  current: {
    last_updated_epoch: 1651192200,
    last_updated: new Date("2022-04-28 18:30"),
    temp_c: 22.0,
    temp_f: 71.6,
    is_day: false,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
      code: 1003,
    },
    wind_mph: 13.6,
    wind_kph: 22.0,
    wind_degree: 200,
    wind_dir: "SSW",
    pressure_mb: 1016.0,
    pressure_in: 30.0,
    precip_mm: 0.8,
    precip_in: 0.03,
    humidity: 69,
    cloud: 75,
    feelslike_c: 24.6,
    feelslike_f: 76.2,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 5.0,
    gust_mph: 1.6,
    gust_kph: 2.5,
  },
};

function App(props: AppProps) {
  return <div className="App"></div>;
}

export default App;
