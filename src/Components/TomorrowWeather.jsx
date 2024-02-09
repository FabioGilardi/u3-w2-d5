// Qui volevo creare una sezione per il meteo dei giorni successivi ma purtroppo non mi funzionava l'API e mi tiro

import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const TomorrowWeather = ({ lat, lon }) => {
  const [air, setAir] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAir = async () => {
    try {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=6ea95a6dd1862ebd1860a1e611e22004"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAir(data);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      <alert>Errore nel caricamento dei dati</alert>;
    }
  };

  useEffect(() => {
    fetchAir();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="w-100 d-flex justify-content-center">
          <Spinner animation="border" variant="primary"></Spinner>
        </div>
      )}
      {!isLoading && (
        <>
          <Card.Text className="mb-1">
            Carbon Monoxide: {air.list[0].components.co} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Ammonia: {air.list[0].components.nh3} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Nitrogen Monoxide: {air.list[0].components.no} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Nitrogen Dioxide: {air.list[0].components.no2} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Ozone: {air.list[0].components.o3} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Pm2.5: {air.list[0].components.pm2_5} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Pm10: {air.list[0].components.pm10} μg/m3
          </Card.Text>
          <Card.Text className="mb-1">
            Sulphur Dioxide: {air.list[0].components.so2} μg/m3
          </Card.Text>
        </>
      )}
    </>
  );
};

export default TomorrowWeather;
