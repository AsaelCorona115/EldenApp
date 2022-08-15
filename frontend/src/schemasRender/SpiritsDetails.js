import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ItemDetails = (props) => {
  const fpCost = props.item.fpCost;
  const hpCost = props.item.hpCost;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">FP Cost: </span> {fpCost} <br />
              <span className="fw-bold">HP Cost: </span> {hpCost} <br />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetails;
