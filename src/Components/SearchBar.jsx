// La ricerca funziona sia che si prema Enter sia che si usi il Button Search

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  return (
    <Container>
      <Row className="py-3 justify-content-center">
        <h1 className="text-center mb-3">
          Discover the Weather all around the globe{" "}
          <i className="bi bi-globe-americas text-primary"></i>
        </h1>
        <Col md={8} lg={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/details/" + city);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Are you looking for a specific city?</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  className="border-primary"
                  placeholder="Ex: London (make sure to write it correctly)"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
                <Button
                  type="button"
                  variant="primary ms-3 d-flex align-items-center"
                  onClick={() => {
                    navigate("/details/" + city);
                  }}
                >
                  Search <i className="bi bi-search ms-2"></i>
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
