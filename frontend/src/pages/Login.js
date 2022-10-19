import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../components/customHooks/useLogin";
const Login = () => {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  //handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Container className="loginContainer">
      {/* Banner, Intro Row */}
      <Row className="mt-sm-5">
        <Col
          className="d-flex align-items-center py-5"
          xs={{ span: 12, order: 2 }}
          md={{ span: 4, order: 1 }}
        >
          <Image
            src="https://pbs.twimg.com/media/FGo2ktmWYAQN2px?format=jpg&name=4096x4096"
            fluid
          ></Image>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 8, order: 2 }}
          className="py-5 "
        >
          <h1 className="HeaderMainText display-4">Rise tarnished</h1>

          <p className="fs-3  mt-4 text-light">
            And be guided by grace to become an Elden Lord in the Lands Between.
            Follow the index of Sir Gideon Ofnir, the All knowing to collect all
            items, explore every corner of these lands and come to meet any ally
            or adversary these lands have to offer. Let the guidance of grace be
            brought to the Tarnished.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          className="text-center"
          xs={12}
          sm={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          <form action="" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Login</legend>
              <input
                type="email"
                placeholder="Email"
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </fieldset>

            <Button
              variant="outline-light"
              className="m-5 loginButton "
              type="submit"
              disabled={isLoading}
            >
              Login
            </Button>
          </form>

          {error && (
            <div className="fs-4 text-danger border border-danger">{error}</div>
          )}

          <p className="fs-5 text-light text-center p-5">
            Not a member yet?{" "}
            <Link to="/SignUp" className="signLink">
              Sign-up
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
