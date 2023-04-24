import { useEffect, useState } from "react";
// import Sunny from "../../public/images/Sunny.jpg";

export default function Home() {
  const [weather, setWeatherData] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=3398a842da0346cd9ca60952232304&q=Melbourne`
      );
      const data = await res.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  let renderImage;
  if (weather?.current?.condition?.text === "Sunny") {
    renderImage =
      "https://www.aldergrovestar.com/wp-content/uploads/2019/11/19458466_web1_Langley-Weather-Sun-Clear-Sky-Skies.jpg";
  } else if (weather?.current?.condition?.text === "Clear") {
    renderImage =
      "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?cs=srgb&dl=pexels-pixabay-355465.jpg&fm=jpg";
  } else if (weather?.current?.condition?.text === "Partly Cloudy") {
    renderImage =
      "https://media.istockphoto.com/id/462095953/photo/beautiful-clouds.jpg?s=612x612&w=0&k=20&c=T28o-AorASwRTVuOfy-PIgg7TpFdJX3RAFp3JvXag3Y=";
  }

  return (
    <div className="weather">
      <div className="weather-container">
        <img src={renderImage} className="img" />
        <div className="text-container">
          <p className="text city"> {weather?.location?.name}</p>
          <h2 className="text temp">{weather?.current?.temp_c} °C</h2>
          <p className="text type">{weather?.current?.condition?.text}</p>
        </div>
      </div>
    </div>
  );
}
