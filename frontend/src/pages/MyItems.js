// React/Bootstrap Components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";
// React hooks
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";

// Custom hooks
import useFetch from "../components/customHooks/useFetch";

// Custom Components
import ItemCard from "../components/ItemCard";
import ItemDetails from "../components/ItemDetails";

const ItemsPage = (props) => {
  // Pulling Item type from the url
  const { ItemType } = useParams();
  //   States
  const [focusedItem, setFocusedItem] = useState(null);
  const [focusedType, setFocusedType] = useState(null);
  const [mainCardShow, setMainCardShow] = useState("d-none");

  //   Setting up API url
  const url = `http://localhost:4000/`;
  const { data, loading, error } = useFetch(url);

  // Close and open functions for card details
  const handleClose = () => {
    setMainCardShow("d-none");
  };

  const firstLoad = useRef(false);

  useEffect(() => {
    if (firstLoad.current) {
      setMainCardShow("d-block");
    } else {
      firstLoad.current = true;
    }
  }, [focusedItem]);

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
        {data && (
          <ItemDetails
            show={mainCardShow}
            close={handleClose}
            item={focusedItem}
            itemType={focusedType}
          ></ItemDetails>
        )}

        {data &&
          data.map((item) => {
            return (
              <Col key={item.id} xs={12} sm={6} lg={4} xl={3}>
                <ItemCard
                  name={item.properties.name}
                  img={item.properties.image}
                  id={item.id}
                  forClicking={() => {
                    setMainCardShow("d-block");
                    setFocusedItem(item.properties);
                    setFocusedType(item.itemType);
                  }}
                  type={item.type}
                ></ItemCard>
              </Col>
            );
          })}
      </>
    );
  };

  return (
    <>
      <Container className="itemsContainer my-5">
        <Row className="d-flex justify-content-center">
          <h2 className="text-center display-5 text-uppercase HeaderMainText">
            My Items
          </h2>

          {loading ? loadingScreen() : renderItems()}
        </Row>
      </Container>
    </>
  );
};

export default ItemsPage;
