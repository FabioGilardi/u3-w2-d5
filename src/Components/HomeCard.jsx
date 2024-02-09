import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ city, imageUrl }) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
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
    fetchWeather();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary"></Spinner>
        </div>
      )}
      {!isLoading && (
        <Col>
          <Card className="shadow border-primary h-100 d-flex flex-column justify-content-between">
            <Card.Img
              variant="top"
              src={imageUrl}
              className="w-100"
              height={"150px"}
            />
            <Card.Body>
              <Card.Title className="mb-2">{weather.name}</Card.Title>
              <Card.Text className="mb-1">
                {weather.weather[0].description}
              </Card.Text>
              <Card.Text className="mb-1">
                Temperature: {parseInt(weather.main.temp) - 273} °C
              </Card.Text>
              <Card.Text className="mb-1">
                Humidity: {weather.main.humidity}%
              </Card.Text>
              <Card.Text className="mb-1">
                Wind Sp: {weather.wind.speed} km/h
              </Card.Text>
              <Button
                variant="primary"
                className="btn-sm w-100 mt-2 d-flex align-items-center justify-content-center"
                onClick={() => navigate("/details/" + city)}
              >
                View more <i className="bi bi-plus-lg ms-1"></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default HomeCard;
