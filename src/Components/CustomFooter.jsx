// Cliccando sul nome si viene portati alla mia pagina di GitHub

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Row className="align-items-center justify-content-center py-3">
        <Col>
          <p className="text-center mb-0">
            Created by ©
            <Link
              className="text-info text-decoration-none"
              to={"https://github.com/FabioGilardi"}
            >
              Fabio Gilardi
            </Link>{" "}
            - {new Date().getFullYear()}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
