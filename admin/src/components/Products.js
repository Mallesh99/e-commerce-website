import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const configuration = {
    method: "get",
    url: "http://localhost:8000/items",
  };

  async function fetchData() {
    try {
      const res = await axios(configuration);
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (item) => {
    // e.preventDefault();
    // console.log(item);
    const config = {
      method: "delete",
      url: `http://localhost:8000/items/${item._id}`,
    };
    axios(config)
      .then((res) => {
        // console.log(res.data);
        fetchData();
      })
      .catch((err) => {
        // console.log(err);
        alert("Not Deleted");
        err = new Error();
      });
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "100px",
      }}
    >
      <table>
        <thead>
          <tr>
            {/* <th>Product-ID</th> */}
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            {/* <th>Image</th> */}
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => {
            return (
              <tr>
                {/* <td>{item._id}</td> */}
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                {/* <td>{item.img}</td> */}
                <td>
                  <Button variant="success" type="submit">
                    <Link
                      to="/updateitem"
                      state={item}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Update Item
                    </Link>
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={(e) => deleteItem(item)}
                  >
                    Delete Item
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Button
        variant="primary"
        type="submit"
        className="mt-3"
        onClick={() => navigate("/additem")}
      >
        Add Item
      </Button>
    </div>
  );
};

export default Products;
