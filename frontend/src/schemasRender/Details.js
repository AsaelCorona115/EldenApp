import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ItemDetails = (props) => {
  const type = props.item.type;
  const effect = props.item.effect;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">Type: </span> {type} <br />
              <span className="fw-bold">Effect: </span> {effect}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetails;
