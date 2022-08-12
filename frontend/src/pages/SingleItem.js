import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import useFetch from "../components/customHooks/useFetch";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { v4 as uuid } from "uuid";

const SingleItem = () => {
  //Retrieving the parameters and using them to set up the url and make the fetch
  const { type, id } = useParams();
  const url = `https://eldenring.fanapis.com/api/${type}/${id}`;
  const { data, loading, error } = useFetch(url);
  //Just to generate a unique valye
  let uniqKey = 0;
  const uniqueKey = () => {
    uniqKey += 1;
    return uniqKey;
  };

  data && console.log(data.data);
  // Conditional renders
  const loadingScreen = () => {
    return (
      <div className="loaderScreen">
        <Spinner animation="grow" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };

  const itemInfo = () => {
    return (
      <>
        <div className="d-flex justify-content-center p-3">
          <Image src={data.data.image} fluid className="border"></Image>
        </div>
        <div>
          <h1 className="text-center">{data.data.name}</h1>
          {Object.keys(data.data)
            .filter(
              (category) =>
                category !== "id" &&
                category !== "name" &&
                category !== "image" &&
                category !== "attackPower" &&
                category !== "dmgNegation" &&
                category !== "resistance" &&
                category !== "healthPoints" &&
                category !== "stats" &&
                category !== "requires" &&
                category !== "attack" &&
                category !== "defence" &&
                category !== "requiredAttributes" &&
                category !== "scalesWith"
            )
            .map((category) => {
              return (
                <p key={uniqueKey()} className="text-center">
                  <span className="text-uppercase fw-bold">{category}:</span>
                  <br />
                  {data.data[category]}
                </p>
              );
            })}
        </div>
      </>
    );
  };

  return (
    <Container className="text-light singleItem mt-5 border p-5">
      <Row>
        <Col>{loading ? loadingScreen() : itemInfo()}</Col>
      </Row>
    </Container>
  );
};

export default SingleItem;
