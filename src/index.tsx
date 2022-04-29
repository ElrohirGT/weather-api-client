import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//This should be hidden. Maybe using an external service, but this is for practice purposes.
const API_KEY = "e26a200fe8cd4b9995702100222904";
const FORECAST_ENDPOINT = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&aqi=no&alerts=no`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
