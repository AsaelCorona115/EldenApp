import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
const ItemCard = (props, key) => {
  const id = props.id;
  const img = props.img;
  const name = props.name;
  const handleShow = props.forClicking;

  return (
    <Container key={key} className="my-5 ItemCardShort text-light p-3" id={id}>
      <Row className="singleItemTop">
        <Col xs={12} className="d-flex justify-content-center">
          <Image src={img} fluid />
        </Col>
      </Row>

      <Row className="singleItemBottom">
        <Col xs={12} className="p-2">
          <div className="subName">
            <h4 className="text-center fs-5">{name}</h4>
          </div>

          <div className="d-flex justify-content-center subButton">
            <Button variant="outline-light" onClick={handleShow}>
              Details
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCard;
