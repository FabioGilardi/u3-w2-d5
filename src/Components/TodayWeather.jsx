import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TomorrowWeather from "./TomorrowWeather";

const TodayWeather = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAir, setShowAir] = useState(false);

  const params = useParams().city;

  const fetchToday = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          params +
          "&appid=6ea95a6dd1862ebd1860a1e611e22004"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setWeather(data);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      <alert>Errore nel caricamento dei dati</alert>;
    }
  };

  useEffect(() => {
    fetchToday();
  }, []);

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
      {!isLoading && (
        <Col sm={10} md={8} lg={6}>
          <Card className="border-primary shadow">
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
              height={"300px"}
            />
            <Card.Body>
              <Card.Title>{weather.name}</Card.Title>
              <Card.Text className="mb-1">
                Country: {weather.sys.country}
              </Card.Text>
              <Card.Text className="mb-1 d-flex">
                <span className="me-4">Lat: {weather.coord.lat}</span>{" "}
                <span>Lon: {weather.coord.lon}</span>
              </Card.Text>
              <Card.Text className="mb-1">
                <span className="me-4">{weather.weather[0].description}</span>
                <span>Cloud: {weather.clouds.all}%</span>
              </Card.Text>
              <Card.Text className="mb-1">
                Humidity: {weather.main.humidity}%
              </Card.Text>
              <Card.Text className="mb-1">
                Pressure: {weather.main.pressure} mm/Hg
              </Card.Text>
              <Card.Text className="mb-1">
                Wind speed: {weather.wind.speed} km/h
              </Card.Text>
              <Card.Text className="mb-1 d-flex justify-content-between">
                <span>Temp: {parseInt(weather.main.temp) - 273} °C</span>
                <span>
                  Temp Min: {parseInt(weather.main.temp_min) - 273} °C
                </span>
                <span>
                  Temp Max: {parseInt(weather.main.temp_max) - 273} °C
                </span>
              </Card.Text>
              <Card.Text className="mb-1 text-center">
                Perceived Temp: {parseInt(weather.main.feels_like) - 273} °C
              </Card.Text>
              <div className="w-100 d-flex justify-content-center">
                <Button
                  className="btn-sm w-50 my-3"
                  onClick={() => {
                    setShowAir(!showAir);
                  }}
                >
                  {!showAir ? "Show air pollution" : "Close"}
                  {!showAir ? (
                    <i className="bi bi-caret-down-fill ms-1"></i>
                  ) : (
                    <i className="bi bi-x-lg ms-1"></i>
                  )}
                </Button>
              </div>
              {showAir && (
                <TomorrowWeather
                  lat={weather.coord.lat}
                  lon={weather.coord.lon}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default TodayWeather;
