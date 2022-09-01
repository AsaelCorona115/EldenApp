import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <Container className="loginContainer">
      <Row>
        <Col
          className="text-center"
          xs={12}
          sm={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          <h1 className="HeaderMainText m">Rise Tarnished</h1>
          <p className="fs-3 text-light generalParagraph p-5">
            Become an Elden Lord and explore the Land Between. <br /> Greatness
            awaits
          </p>
          <form action="">
            <fieldset>
              <legend>Login</legend>

              <input
                type="text"
                placeholder="Username"
                className="loginInput"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="loginInput"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                required
              />
            </fieldset>

            <Button variant="outline-light" className="m-5 loginButton ">
              Login
            </Button>
          </form>

          <p className="fs-5 text-light text-center p-5">
            Not a member yet?{" "}
            <Link to="/Sign-Up" className="signLink">
              Sign-up
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
