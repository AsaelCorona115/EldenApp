import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const NPCDetails = (props) => {
  const location = props.item.location;
  const quote = props.item.quote;
  const role = props.item.role;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">Location: </span> {location} <br />
              <span className="fw-bold">Quote: </span> {quote} <br />
              <span className="fw-bold">Role: </span> {role}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NPCDetails;
