import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ArmorDetails = (props) => {
  const category = props.item.category;
  const weight = props.item.weight;
  const negation = props.item.dmgNegation;
  const resistance = props.item.resistance;
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
              <u>Damage Negation</u>
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
          <Col xs={12} sm={6}>
            <p className="text-center fs-4 text-underline">
              <u>Resistance</u>
            </p>
            <div className="d-flex justify-content-center pt-sm-2  mb-4">
              <table className="text-capitalize my-sm-5">
                <tbody>
                  {resistance.map((resistanceType) => {
                    uniqKey += 1;
                    return (
                      <tr key={uniqKey} className="fs-5">
                        <th className="pl-2">{resistanceType.name}</th>
                        <th className="amountCell">{resistanceType.amount}</th>
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

export default ArmorDetails;
