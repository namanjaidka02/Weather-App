import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeatherData] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=511a32b9b1da4f71b5c154927231607&q=Chandigarh`
      );
      const data = await res.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  let renderImage;
  switch (weather.current?.condition?.text) {
    case "Sunny":
      renderImage = "https://cdn-icons-png.flaticon.com/128/869/869869.png";
      break;
    case "Patchy rain possible":
      renderImage = "https://cdn-icons-png.flaticon.com/128/4005/4005817.png";
      break;
    case "Partly cloudy":
      renderImage = "https://cdn-icons-png.flaticon.com/128/5370/5370273.png";
      break;
    case "Moderate rain":
      renderImage = "https://cdn-icons-png.flaticon.com/128/1850/1850736.png";
      break;
    case "Mist":
      renderImage = "https://cdn-icons-png.flaticon.com/128/4005/4005817.png";
      break;
    case "Patchy light rain with thunder":
      renderImage = "https://cdn-icons-png.flaticon.com/128/3663/3663988.png";
      break;
    case "Moderate or heavy rain with thunder":
      renderImage =
        "https://t3.ftcdn.net/jpg/06/13/41/66/240_F_613416643_vid7Ay3aONfynWVOtPzhV0Hz68FQRbgP.jpg";
      break;
    case "Moderate or heavy rain shower":
      renderImage = "https://www.flaticon.com/free-icon/rain_3157575";
      break;
    default:
    case "Clear":
      renderImage = "https://cdn-icons-png.flaticon.com/128/4150/4150908.png";
      break;
  }

  const currentDate = new Date();

  const currentDay = currentDate.toLocaleString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const currentTime = hours + ":" + minutes;

  return (
    <>
      <div className="weather-container">
        <div className="text-container">
          <p className="text day-date">{currentDay}th</p>
          <p className="text time">{currentTime}</p>
          <p className="text city"> {weather?.location?.region}</p>
        </div>
        <div className="icon-container">
          <img src={renderImage} className="weather-type-icon" />
        </div>
        <div className="weather-details">
          <h2 className="text temp">{weather?.current?.temp_c} °C</h2>
          <p className=" feelslike">
            feels like {weather.current?.feelslike_c}
          </p>
          <p className="text type">{weather?.current?.condition?.text}</p>
        </div>
      </div>

      <div className="other-details">
        <div className="wind-speed">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5532/5532989.png"
            className="wind-icon"
          />
          <p className="text wind">{weather?.current?.wind_kph}</p>
        </div>
        <div className="wind-direction">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3466/3466636.png"
            className="wind-icon"
          />
          <p className="text ">{weather.current?.wind_dir}</p>
        </div>
        <div className="humidity">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4148/4148460.png"
            className="humidity-icon"
          />
          <p className="text">{weather.current?.humidity}</p>
        </div>
      </div>
    </>
  );
}
