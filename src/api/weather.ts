import axios from "axios";
import { CityCurrentWeatherApiResponse } from "../models/APIModels";

//This api key should be hidden. Probably using an external service to obtain it.
const API_KEY = "e26a200fe8cd4b9995702100222904";
const BASE_URL = "http://api.weatherapi.com/v1/";
const FORECAST_ENDPOINT = `${BASE_URL}forecast.json?key=${API_KEY}&aqi=no&alerts=no`;
const CURRENT_WEATHER_ENDPOINT = `${BASE_URL}current.json?key=${API_KEY}&aqi=no`;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export async function GetCurrentWeather(city: string): Promise<CityCurrentWeatherApiResponse> {
    try {
        let response = await axiosInstance.get("current.json", {
            params: {
                key: API_KEY,
                aqi: "no",
                q: city
            }
        });
        return Promise.resolve(response.data as CityCurrentWeatherApiResponse);
    } catch (error) {
        return Promise.reject(error);
    }
}