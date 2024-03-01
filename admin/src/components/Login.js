import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Submitted!!");
    const configuration = {
      method: "post",
      url: "http://localhost:8000/loginAdmin",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("admin", JSON.stringify(res?.data));
        setLogin(true);
        // alert("Logged In!!");
        window.location.reload(false);
      })
      .catch((err) => {
        // console.log(err);
        alert("Wrong Credentials");
        err = new Error();
      });
  };

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: "35%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          borderStyle: "solid",
          borderWidth: "2.5px",
          borderRadius: "30px",
          padding: "20px",
          borderColor: "#F0F0F0",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
