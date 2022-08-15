import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ShieldDetails = (props) => {
  const category = props.item.category;
  const weight = props.item.weight;
  const attack = props.item.attack;
  const negation = props.item.defence;
  const requirements = props.item.requiredAttributes;
  const scales = props.item.scalesWith;
  let uniqKey = 0;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className=" fs-4 text-center">
              <span className="fw-bold">Category:</span> {category} <br />
              <span className="fw-bold">Weigth:</span> {weight}
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6}>
            <p className="text-center fs-4 text-underline">
              <u>Attack</u>
            </p>
            <div className="d-flex justify-content-center pt-md-2  mb-4">
              <table className="text-capitalize mb-5">
                <tbody>
                  {attack.map((attackType) => {
                    uniqKey += 1;
                    return (
                      <tr key={uniqKey} className="fs-5">
                        <th className="pl-2">{attackType.name}</th>
                        <th className="amountCell">{attackType.amount}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <p className="text-center fs-4 text-underline">
              <u>Defense</u>
            </p>
            <div className="d-flex justify-content-center pt-md-2  mb-4">
              <table className="text-capitalize mb-5">
                <tbody>
                  {negation.map((negationType) => {
                    uniqKey += 1;
                    return (
                      <tr key={uniqKey} className="fs-5">
                        <th className="pl-2">{negationType.name}</th>
                        <th className="amountCell">{negationType.amount}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <p className="text-center fs-4 text-underline">
              <u>Requirements</u>
            </p>
            <div className="d-flex justify-content-center pt-md-2  mb-4">
              <table className="text-capitalize mb-5">
                <tbody>
                  {requirements.map((requirement) => {
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
          <Col xs={12} sm={6}>
            <p className="text-center fs-4 text-underline">
              <u>Scales With</u>
            </p>
            <div className="d-flex justify-content-center">
              <table className="text-capitalize">
                <tbody>
                  {scales.map((scalesType) => {
                    uniqKey += 1;
                    return (
                      <tr key={uniqKey} className="fs-5">
                        <th className="pl-2">{scalesType.name}</th>
                        <th className="amountCell">{scalesType.scaling}</th>
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

export default ShieldDetails;
