import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  const title = props.title;
  const image = props.img;
  const link = props.Link;
  return (
    <Container className="ItemCard my-5">
      <Row>
        <Col>
          <div className="cardTop d-flex justify-content-center">
            <Image src={image} className="cardImg my-5" fluid></Image>
          </div>
          <div className="cardBottom d-flex justify-content-center">
            <Link to={`/Items/${link}`}>
              <Button variant="outline-light mb-3">{title}</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCard;
