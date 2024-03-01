import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Login from "./components/Login";
import Layout from "./components/Layout";
import AddItem from "./components/AddItem";
import UpdateItem from "./components/UpdateItem";
import UpdateUser from "./components/UpdateUser";
import Users from "./components/Users";

function App() {
  const isAuthenticated = window.localStorage.getItem("admin") != null;
  console.log(window.localStorage.getItem("admin"));
  return (
    <div className="App">
      <Routes>
        {!isAuthenticated && <Route path="/*" element={<Login />} />}
        {isAuthenticated && (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="/additem" element={<AddItem />} />
              <Route path="/updateitem" element={<UpdateItem />} />
              <Route path="/users" element={<Users />} />
              <Route path="/updateuseremail" element={<UpdateUser />} />
            </Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
