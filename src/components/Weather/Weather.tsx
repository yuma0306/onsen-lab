import { useState } from 'react';
import { weatherType } from '@/types/weather';
import prefJson from '@/data/pref.json';
import { endpoint } from '@/constants/weather';

export default function Weather() {
  // 都道府県
  const [location, setLocation] = useState('');
  // 天気データ（結果）
  const [weatherData, setWeatherData] = useState<null | weatherType>(null);
  // 都道府県の変更
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if(e.target.value) {
      setLocation(e.target.value);
    }
  }
  // APIを叩いて天気を取得
  async function fetchWeather(pref: string) {
    if(!pref) {
      alert('選択してください');
      return;
    }
    try {
      const apiUrl = `${endpoint}?q=${pref}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&lang=ja&units=metric`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <select value={location} onChange={(e) => handleChange(e)}>
        <option value="">天気を調べる</option>
        {Object.entries(prefJson).map(([key, value], index) => (
          <option key={index} value={key}>{value}</option>
        ))}
      </select>
      <button onClick={() => fetchWeather(location)}>検索</button>
      {weatherData && weatherData.cod !== 401 ? (
        <dl>
          <dt>{`現在の${weatherData.name}`}</dt>
          <dd>天気：{weatherData.weather[0].description}</dd>
          <dd>気温：{weatherData.main.temp}度</dd>
        </dl>
      ) : null}
    </div>
  );
}
