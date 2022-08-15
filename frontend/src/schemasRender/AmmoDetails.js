const AmmoDetails = (props) => {
  const passive = props.item.passive;
  const attackDetails = props.item.attackPower;
  let uniqKey = 0;
  return (
    <>
      <p className=" fs-5 text-center">
        <span className="fw-bold">Passive:</span> {passive}
      </p>
      <div className="d-flex justify-content-center pt-md-5  mb-4">
        <table className="text-capitalize mb-5">
          <tbody>
            {attackDetails.map((attackType) => {
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
    </>
  );
};

export default AmmoDetails;
