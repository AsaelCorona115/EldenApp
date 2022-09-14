import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const BossesDetails = (props) => {
  const location = props.item.location;
  const drops = props.item.drops;
  const health = props.item.healthPoints;

  let uniqKey = 0;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">Location: </span> {location} <br />
              <span className="fw-bold">Health: </span> {health} <br />
            </p>
            <ul className="fs-4">
              <span className="fw-bold">Drops: </span>
              {drops.map((drop) => {
                uniqKey += 1;
                return <li key={uniqKey}>{drop}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BossesDetails;
