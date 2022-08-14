// Bootstrap React Components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Item Types
import AmmoDetails from "../schemasRender/AmmoDetails";
import ArmorDetails from "../schemasRender/ArmorDetails";

const ItemDetails = (props) => {
  const show = props.show;
  const close = props.close;
  const item = props.item;
  const type = props.itemType;

  let contentSpecifics = null;
  switch (type) {
    case "ammos":
      contentSpecifics = () => {
        return (
          <AmmoDetails passive={item.passive} attackPower={item.attackPower} />
        );
      };
      break;
    case "armors":
      contentSpecifics = () => {
        return (
          <ArmorDetails
            category={item.category}
            weight={item.weight}
            negation={item.dmgNegation}
            resistance={item.resistance}
          />
        );
      };
      break;
    default:
      contentSpecifics = () => {
        <p>No item Type :c </p>;
      };
      break;
  }
  return (
    <>
      {item && (
        <Container fluid className={`mainItemBackground ${show}`}>
          <Row>
            <Col className="text-light p-5">
              <Container className="mainItemContainer">
                <Row>
                  <Col className="d-flex justify-content-end pt-2">
                    <Button variant="outline-light x" onClick={close}>
                      <i className="bi bi-x-circle fs-1"></i>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <Image src={item.image}></Image>
                  </Col>
                </Row>
                <Row>
                  <Col className="contentDetails p-4">
                    <hr />
                    <h1 className="text-center fw-bold">{item.name}</h1>
                    <p className="text-center fs-4">{item.description}</p>
                    <hr />
                    {contentSpecifics()}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemDetails;
