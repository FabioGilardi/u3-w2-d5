import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation().pathname;

  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="logo"
            className="me-3"
            width={"40px"}
            height={"40px"}
          ></img>
          <Link className="nav-link" to="/">
            EpiWeather
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={location === "/" ? "nav-link active" : "nav-link"}
              to="/"
            >
              <i className="bi bi-house"></i> Home
            </Link>
            {location.includes("/details") && (
              <Link className="nav-link active">
                <i className="bi bi-search"></i> In-depth
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
