import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Footer = () => {
  return (
    <Container className="text-center footer text-light" fluid>
      <Row>
        <Col>
          <h1 className="my-3">
            Site created by <br />
            © Victor Corona <br />
            2022 <br />
            Powered by: Elden Ring API (FanAPI's)
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
