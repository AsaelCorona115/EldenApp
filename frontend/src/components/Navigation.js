import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Offcanvas Container */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offCanvasBody">
          <Link to="/" className="offCanvasLink" onClick={handleClose}>
            <p>Explore Items</p>
          </Link>
          <Link to="/MyItems" className="offCanvasLink" onClick={handleClose}>
            <p>My Items</p>
          </Link>
          <Link to="/Login" className="offCanvasLink" onClick={handleClose}>
            <p>Login</p>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>

      {/* All time display container */}
      <Container className="navbarContainer" fluid>
        <Row>
          {/* Logo Col */}
          <Col
            xs={6}
            md={3}
            xl={3}
            className="p-2 d-flex justify-content-start"
          >
            <Link to="/">
              <Image
                src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/eldenring_new.png"
                fluid
              ></Image>
            </Link>
          </Col>

          {/* Menu Col */}
          <Col
            xs={6}
            md={9}
            xl={9}
            className="d-flex justify-content-end align-items-center"
          >
            <div className="d-md-none">
              <Button variant="outline-light" onClick={handleShow}>
                <i className="bi bi-list"></i>
              </Button>
            </div>

            <div className="d-none d-md-flex">
              <Link to="/" className="navLink">
                Explore <br /> Items
              </Link>
              <Link to="/MyItems" className="navLink">
                My <br /> Items
              </Link>
              <Link to="/Login" className="navLink mt-2">
                Login
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navigation;
