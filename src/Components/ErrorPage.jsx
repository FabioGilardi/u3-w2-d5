import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ErrorePage = () => (
  <Container className="h-100">
    <Row className="h-100 justify-content-center">
      <Col
        sm={10}
        md={8}
        lg={6}
        className="h-100 d-flex flex-column justify-content-center align-items-center"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Vsg-YnmCY_4C4gndGN_6Xr2rpjWQ1T9kRQ&usqp=CAU"
          alt="Polar Bear"
        ></img>
        <h3 className="text-center">ERROR 404</h3>
        <p>Thanks to Stefano many polar bears have been saved!</p>
      </Col>
    </Row>
  </Container>
);

export default ErrorePage;
