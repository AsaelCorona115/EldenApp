import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const AshesDetails = (props) => {
  const affinity = props.item.affinity;
  const skill = props.item.skill;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">Affinity: </span> {affinity} <br />
              <span className="fw-bold">Skill: </span> {skill}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AshesDetails;
