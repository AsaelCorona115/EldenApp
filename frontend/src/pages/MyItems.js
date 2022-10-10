// React/Bootstrap Components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";
// React hooks
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";

// Custom hooks
import { useSavedItemsContext } from "../components/customHooks/useSavedItemContext";

// Custom Components
import ItemCard from "../components/ItemCard";
import ItemDetails from "../components/ItemDetails";

const ItemsPage = (props) => {
  //Data from context
  const { savedItems, dispatch } = useSavedItemsContext();

  // Pulling Item type from the url
  const { ItemType } = useParams();
  //   States
  const [focusedItem, setFocusedItem] = useState(null);
  const [focusedType, setFocusedType] = useState(null);
  const [mainCardShow, setMainCardShow] = useState("d-none");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isItemSaved, setIsItemSaved] = useState("");

  useEffect(() => {
    const fetchSavedItems = async () => {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://eldenappbackend.herokuapp.com/`);
      const json = await response.json();
      if (response.ok) {
        setLoading(false);
        setError(null);
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };
    fetchSavedItems();
  }, [dispatch]);

  // Close and open functions for card details
  const handleOpen = (item) => {
    setMainCardShow("d-block");
    setFocusedItem(item);
    setFocusedType(item.itemType);
  };

  const handleClose = () => {
    setMainCardShow("d-none");
    setFocusedItem(null);
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
            item={focusedItem.properties}
            itemType={focusedType}
            id={focusedItem.id}
            databaseId={focusedItem._id}
          ></ItemDetails>
        )}

        {savedItems &&
          savedItems.map((item) => {
            return (
              <Col key={item.id} xs={12} sm={6} lg={4} xl={3}>
                <ItemCard
                  name={item.properties.name}
                  img={item.properties.image}
                  id={item.id}
                  forClicking={() => {
                    handleOpen(item);
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
            My Saved Items
          </h2>

          {loading ? loadingScreen() : renderItems()}
        </Row>
      </Container>
    </>
  );
};

export default ItemsPage;
