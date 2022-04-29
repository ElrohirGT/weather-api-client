export type CityCurrentTimeApiResponse = {
    location: LocationApiResponse,
    current: WeatherApiResponse
}

export type LocationApiResponse = {
    name: String,
    region: String,
    country: String,
    lat: Number,
    lon: Number,
    tz_id: String,
    localtime_epoch: Number,
    localtime: Date
}

export type WeatherApiResponse = {
    last_updated_epoch: Number,
    last_updated: Date,
    temp_c: Number,
    temp_f: Number,
    is_day: Boolean,
    condition: WeatherConditionApiResponse,
    wind_mph: Number,
    wind_kph: Number,
    wind_degree: Number,
    wind_dir: Number,
    pressure_mb: Number,
    pressure_in: Number,
    precip_mm: Number,
    precip_in: Number,
    humidity: Number,
    cloud: Number,
    feelslike_c: Number,
    feelslike_f: Number,
    vis_km: Number,
    vis_miles: Number,
    uv: Number,
    gust_mph: Number,
    gust_kph: Number
}

export type WeatherConditionApiResponse = {
    text: String,
    icon: String,
    code: Number
}