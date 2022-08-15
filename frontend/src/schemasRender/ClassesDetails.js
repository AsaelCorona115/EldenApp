import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ClassesDetails = (props) => {
  const stats = props.item.stats;

  let uniqKey = 0;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className=" fs-4 text-center">
              <span className="fw-bold">Stats: </span> <br />
            </h1>
            <ul className="fs-5">
              <li>{`Level: ${stats.level}`}</li>
              <li>{`Vigor: ${stats.vigor}`}</li>
              <li>{`Mind: ${stats.mind}`}</li>
              <li>{`Endurance: ${stats.endurance}`}</li>
              <li>{`Strength: ${stats.strength}`}</li>
              <li>{`Dexterity: ${stats.dexterity}`}</li>
              <li>{`Intelligence: ${stats.intelligence}`}</li>
              <li>{`Faith: ${stats.faith}`}</li>
              <li>{`Arcane: ${stats.arcane}`}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClassesDetails;
