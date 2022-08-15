import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const SorceriesDetails = (props) => {
  const cost = props.item.cost;
  const slots = props.item.slots;
  const effects = props.item.effects;
  const requires = props.item.requires;
  let uniqKey = 0;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">Slots:</span> {slots} <br />
              <span className="fw-bold">Cost:</span> {cost} <br />
              <span className="fw-bold">Effects:</span> {effects} <br />
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center fs-4 text-underline">
              <u>Requires</u>
            </p>
            <div className="d-flex justify-content-center pt-md-2  mb-4">
              <table className="text-capitalize mb-5">
                <tbody>
                  {requires.map((requirement) => {
                    uniqKey += 1;
                    return (
                      <tr key={uniqKey} className="fs-5">
                        <th className="pl-2">{requirement.name}</th>
                        <th className="amountCell">{requirement.amount}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SorceriesDetails;
