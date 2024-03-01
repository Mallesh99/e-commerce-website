import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const configuration = {
    method: "get",
    url: "http://localhost:8000/users",
  };

  const navigate = useNavigate();

  async function fetchData() {
    try {
      const res = await axios(configuration);
      console.log(res.data);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (user) => {
    // e.preventDefault();
    // console.log(user);
    const config = {
      method: "delete",
      url: `http://localhost:8000/users/${user._id}`,
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

  const [block, setBlock] = useState(false);

  const BlockUser = (user) => {
    // setBlock(!block);
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
            <th>id</th>
            <th>User Emails</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                {/* <td>{user._id}</td> */}
                <td>{user._id}</td>

                <td>{user.email}</td>

                <td>
                  <Button variant="success" type="submit">
                    <Link
                      to="/updateuseremail"
                      state={user}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Update User Email
                    </Link>
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={(e) => deleteUser(user)}
                  >
                    Delete user
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => BlockUser(user)}
                  >
                    {block ? "Unblock" : "Block"} User
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
