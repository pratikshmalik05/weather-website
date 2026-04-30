import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, CloudLightning, Snowflake, Thermometer, MapPin } from 'lucide-react';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, main, weather, wind, sys } = data;
  const condition = weather[0].main;
  const description = weather[0].description;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const humidity = main.humidity;
  const windSpeed = Math.round(wind.speed * 3.6); // Convert m/s to km/h

  const getWeatherIcon = (condition, size = 48) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className="text-amber-400" size={size} />;
      case 'clouds':
        return <Cloud className="text-zinc-300" size={size} />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="text-blue-400" size={size} />;
      case 'thunderstorm':
        return <CloudLightning className="text-indigo-400" size={size} />;
      case 'snow':
        return <Snowflake className="text-sky-200" size={size} />;
      default:
        return <Cloud className="text-zinc-300" size={size} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
      {/* Main Temp & Condition Hero */}
      <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-10 transition-transform group-hover:scale-110 duration-700">
          {getWeatherIcon(condition, 240)}
        </div>
        
        <div className="flex items-center gap-2 text-zinc-400 mb-8">
          <MapPin size={16} />
          <h2 className="text-sm font-medium uppercase tracking-widest">{name}, {sys.country}</h2>
        </div>

        <div>
          <div className="flex items-end gap-2">
            <span className="text-7xl md:text-8xl font-bold tracking-tighter text-zinc-100">{temp}°</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-full px-4 py-1.5 flex items-center gap-2">
              {getWeatherIcon(condition, 16)}
              <span className="text-sm font-medium capitalize text-zinc-300">{description}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of smaller stats */}
      <div className="flex flex-col gap-6">
        <div className="bento-card flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-zinc-400 mb-2">
            <Thermometer size={16} />
            <span className="text-xs uppercase tracking-wider font-semibold">Feels Like</span>
          </div>
          <div className="text-3xl font-semibold text-zinc-100">{feelsLike}°</div>
        </div>

        <div className="bento-card flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-zinc-400 mb-2">
            <Droplets size={16} className="text-blue-400/70" />
            <span className="text-xs uppercase tracking-wider font-semibold">Humidity</span>
          </div>
          <div className="text-3xl font-semibold text-zinc-100">{humidity}<span className="text-lg text-zinc-500 ml-1">%</span></div>
        </div>

        <div className="bento-card flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-zinc-400 mb-2">
            <Wind size={16} />
            <span className="text-xs uppercase tracking-wider font-semibold">Wind</span>
          </div>
          <div className="text-3xl font-semibold text-zinc-100">{windSpeed}<span className="text-sm text-zinc-500 ml-1 font-normal">km/h</span></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
