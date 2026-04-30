import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    throw new Error('API key is missing. Please add it to your .env file.');
  }

  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('City not found. Please check the spelling.');
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
};

export const getWeatherByLocation = async (lat, lon) => {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    throw new Error('API key is missing. Please add it to your .env file.');
  }

  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data for your location.');
  }
};
