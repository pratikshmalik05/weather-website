import React, { useState, useEffect } from 'react';
import { Cloud, Loader2 } from 'lucide-react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import SearchHistory from './components/SearchHistory';
import { getWeatherByCity, getWeatherByLocation } from './services/weatherApi';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem('weatherSearchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const saveToHistory = (city) => {
    let newHistory = [city, ...searchHistory.filter((c) => c !== city)];
    if (newHistory.length > 5) {
      newHistory = newHistory.slice(0, 5);
    }
    setSearchHistory(newHistory);
    localStorage.setItem('weatherSearchHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('weatherSearchHistory');
  };

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      saveToHistory(data.name);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getWeatherByLocation(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeatherData(data);
          saveToHistory(data.name);
        } catch (err) {
          setError(err.message);
          setWeatherData(null);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError('Unable to retrieve your location');
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 p-4 md:p-8 font-sans selection:bg-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar / Top Section */}
        <div className="w-full lg:w-[350px] flex flex-col gap-6 shrink-0">
          <header className="flex items-center gap-3 mb-2 px-2">
            <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
              <Cloud size={20} className="text-zinc-100" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">Weather</h1>
              <p className="text-xs text-zinc-400">Dashboard UI</p>
            </div>
          </header>

          <div className="bento-card !p-5">
            <SearchBar onSearch={handleSearch} onLocation={handleLocation} />
            
            <div className="mt-6">
              <SearchHistory 
                history={searchHistory} 
                onSelect={handleSearch} 
                onClear={clearHistory} 
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-6 text-sm flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              {error}
            </div>
          )}

          {loading ? (
            <div className="h-full min-h-[400px] flex flex-col justify-center items-center gap-4 bento-card">
              <Loader2 className="animate-spin text-zinc-500" size={32} />
              <p className="text-zinc-500 text-sm">Fetching telemetry...</p>
            </div>
          ) : weatherData ? (
            <WeatherCard data={weatherData} />
          ) : (
            <div className="h-full min-h-[400px] flex flex-col justify-center items-center gap-4 bento-card border-dashed border-zinc-800 bg-transparent">
              <Cloud size={48} className="text-zinc-800" />
              <p className="text-zinc-500 text-sm">Enter a location to view weather telemetry</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;
