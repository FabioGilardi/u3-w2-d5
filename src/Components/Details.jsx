import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import TodayWeather from "./TodayWeather";
import { useState } from "react";

const Details = () => {
  const [showToday, setShowToday] = useState(false);

  const params = useParams().city;

  return (
    <Container>
      <h2 className="text-center my-2">What's going on in {params}?</h2>
      <div className="w-100 text-center">
        <Button
          onClick={() => {
            setShowToday(!showToday);
          }}
        >
          {!showToday ? "Show Me" : "Close"}
          {!showToday ? (
            <i className="bi bi-caret-down-fill ms-1"></i>
          ) : (
            <i className="bi bi-x-lg ms-1"></i>
          )}
        </Button>
      </div>
      <Row className="justify-content-center my-3">
        {showToday && <TodayWeather />}
      </Row>
    </Container>
  );
};

export default Details;
