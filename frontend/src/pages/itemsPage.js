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
  const [mainCardShow, setMainCardShow] = useState("d-none");

  //   Setting up API url
  const url = `https://eldenring.fanapis.com/api/${ItemType}?limit=150`;

  const { data, loading, error } = useFetch(url);

  // Close and open functions for card details
  const handleOpen = (item) => {
    setMainCardShow("d-block");
    setFocusedItem(item);
  };

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
        {focusedItem && (
          <ItemDetails
            show={mainCardShow}
            close={handleClose}
            itemType={ItemType}
            item={focusedItem}
            id={focusedItem.id}
            databaseId={focusedItem._id}
          ></ItemDetails>
        )}

        {data &&
          data.data.map((item) => {
            return (
              <Col key={item.id} xs={12} sm={6} lg={4} xl={3}>
                <ItemCard
                  name={item.name}
                  img={item.image}
                  id={item.id}
                  type={ItemType}
                  forClicking={() => {
                    handleOpen(item);
                  }}
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
            {ItemType}
          </h2>

          {loading ? loadingScreen() : renderItems()}
        </Row>
      </Container>
    </>
  );
};

export default ItemsPage;
