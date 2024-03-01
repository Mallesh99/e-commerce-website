import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateItem = () => {
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();

  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "patch",
      url: `http://localhost:8000/items/${item._id}`,
      data: {
        name,
        description,
        category,
        price,
      },
    };
    axios(configuration)
      .then((res) => {
        // console.log(res.data);
        navigate("/products");
        // alert("Item Updated");
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Item
        </Button>
      </Form>
    </div>
  );
};

export default UpdateItem;
