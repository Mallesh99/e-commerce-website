import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  // const inputRef = useRef();

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // alert("Submitted!!");

    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    try {
      const data = await axios.post(
        "http://localhost:8000/items",
        formData,
        config
      );
      alert("Item Added");
      // console.log(data);
    } catch (err) {
      console.log(err);
    }

    // const formData = new FormData();

    // formData.append("name", name);
    // formData.append("description", description);
    // formData.append("category", category);
    // formData.append("price", price);
    // formData.append("file", file);

    // console.log(formData);
    // const result = await axios.post("http://localhost:8000/items", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // console.log(result.data);

    // const configuration = {
    //   method: "post",
    //   url: "http://localhost:8000/items",
    //   FormData: {
    //     name,
    //     description,
    //     category,
    //     price,
    //     file,
    //   },
    // };
    // axios(configuration)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert("Item Added");
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //     alert("Item not Added");
    //     err = new Error();
    //   });
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
        {/* <Form.Group className="mb-3" controlId="customFile">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" name="file" onChange={handleFileChange} />
        </Form.Group> */}
        {/* <input
          type="file"
          // multiple
          accept="image/*"
          onChange={handleFileChange}
        /> */}

        {/* final */}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Please add image here</Form.Label>
          <Form.Control
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            name="image"
            type="file"
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
        {/* <label className="form-label" htmlFor="customFile">
          Product Image
        </label>
        <input
          type="file"
          className="form-control"
          id="upload"
          onChange={(e) => setFile(e.target.files[0])}
        /> */}
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
