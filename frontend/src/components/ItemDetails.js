// Bootstrap React Components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Item Types
import AmmoDetails from "../schemasRender/AmmoDetails";
import ArmorDetails from "../schemasRender/ArmorDetails";
import AshesDetails from "../schemasRender/AshesDetails";
import BossesDetails from "../schemasRender/BossesDetails";
import ClassesDetails from "../schemasRender/ClassesDetails";
import CreatureDetails from "../schemasRender/Creatures";
import IncantationDetails from "../schemasRender/IncantationDetails";
import Details from "../schemasRender/Details";
import NPCDetails from "../schemasRender/NPCDetails";
import ShieldDetails from "../schemasRender/ShieldsDetails";
import SorceriesDetails from "../schemasRender/SorceriesDetails";
import SpiritsDetails from "../schemasRender/SpiritsDetails";
import TalismansDetails from "../schemasRender/TalismansDetails";
import WeaponDetails from "../schemasRender/WeaponDetails";
const ItemDetails = (props) => {
  const show = props.show;
  const close = props.close;
  const item = props.item;
  const type = props.itemType;

  let contentSpecifics = null;
  switch (type) {
    case "ammos":
      contentSpecifics = () => {
        return <AmmoDetails item={item} />;
      };
      break;
    case "armors":
      contentSpecifics = () => {
        return <ArmorDetails item={item} />;
      };
      break;
    case "ashes":
      contentSpecifics = () => {
        return <AshesDetails item={item} />;
      };
      break;
    case "bosses":
      contentSpecifics = () => {
        return <BossesDetails item={item} />;
      };
      break;
    case "classes":
      contentSpecifics = () => {
        return <ClassesDetails item={item} />;
      };
      break;
    case "creatures":
      contentSpecifics = () => {
        return <CreatureDetails item={item} />;
      };
      break;
    case "incantations":
      contentSpecifics = () => {
        return <IncantationDetails item={item} />;
      };
      break;
    case "items":
      contentSpecifics = () => {
        return <Details item={item} />;
      };
      break;
    case "locations":
      contentSpecifics = () => {
        return null;
      };
      break;
    case "npcs":
      contentSpecifics = () => {
        return <NPCDetails item={item} />;
      };
      break;
    case "shields":
      contentSpecifics = () => {
        return <ShieldDetails item={item} />;
      };
      break;
    case "sorceries":
      contentSpecifics = () => {
        return <SorceriesDetails item={item} />;
      };
      break;
    case "spirits":
      contentSpecifics = () => {
        return <SpiritsDetails item={item} />;
      };
      break;
    case "talismans":
      contentSpecifics = () => {
        return <TalismansDetails item={item} />;
      };
      break;
    case "weapons":
      contentSpecifics = () => {
        return <WeaponDetails item={item} />;
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
                    <Button
                      variant="outline-light x"
                      onClick={close}
                      className="fs-1 p-2 rounded rounded-circle"
                    >
                      X
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <Image src={item.image} fluid></Image>
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
