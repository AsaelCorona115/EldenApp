import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../components/customHooks/useFetch";
import ItemCard from "../components/ItemCard";
import Button from "react-bootstrap/Button";

const ItemsPage = (props) => {
  // Pulling Item type from the url
  const { ItemType } = useParams();
  //   States
  const [items, setItems] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);
  const [mainCardShow, setMainCardShow] = useState("d-none");

  //   Setting up API url
  const url = `https://eldenring.fanapis.com/api/${ItemType}?limit=150`;

  const { data, loading, error } = useFetch(url);

  const handleClose = () => {
    setMainCardShow("d-none");
  };
  const handleShow = (e) => {
    setMainCardShow("d-block");
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.key);
  };

  const loadingScreen = () => {
    return (
      <div className="loaderScreen">
        <Spinner animation="grow" variant="light" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };

  const renderItems = () => {
    return (
      <>
        {data &&
          data.data.map((item) => {
            return (
              <Col key={item.id} xs={12} sm={6} lg={4} xl={3}>
                <ItemCard
                  name={item.name}
                  img={item.image}
                  description={item.description}
                  id={item.id}
                  type={ItemType}
                  forClicking={handleShow}
                ></ItemCard>
              </Col>
            );
          })}
      </>
    );
  };

  return (
    <>
      <Container fluid className={`mainItemBackground ${mainCardShow}`}>
        <Row>
          <Col className="text-light">
            <Container className="mainItemContainer">
              <Row>
                <Col className="d-flex justify-content-end">
                  <Button variant="outline-light x" onClick={handleClose}>
                    <i className="bi bi-x-circle fs-1"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="itemsContainer my-5">
        <Row className="d-flex justify-content-center">
          <h2 className="text-center display-5 text-uppercase HeaderMainText">
            {ItemType}
          </h2>

          {loading ? loadingScreen() : renderItems()}
        </Row>
      </Container>
    </>
  );
};

export default ItemsPage;
