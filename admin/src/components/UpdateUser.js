import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateItem = () => {
  const location = useLocation();
  const user = location.state;

  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "patch",
      url: `http://localhost:8000/users/${user._id}`,
      data: {
        email,
      },
    };
    axios(configuration)
      .then((res) => {
        // console.log(res.data);
        alert("User Updated");
      })
      .catch((err) => {
        // console.log(err);
        alert("Item not Updated");
        err = new Error();
      });
  };
  return (
    <div
      className="mt-5"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          width: "60%",
          borderStyle: "solid",
          borderWidth: "2.5px",
          borderRadius: "30px",
          padding: "20px",
          borderColor: "#F0F0F0",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update User Email
        </Button>
      </Form>
    </div>
  );
};

export default UpdateItem;
