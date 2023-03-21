import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";
import Table from "react-bootstrap/Table";
import UpdateModal from "../ModalView/UpdateModal";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState([]);
  const users = useLoaderData();
  const updateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const id = form.id.value;

    console.log({ name, address });

    fetch(`http://localhost:5000/users?id=${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status != "fail") {
          window.location.reload();
        } else {
          alert(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateUser = (id) => {
    //  alert(`update user ${id}`);
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.id = id;
        setUser(data);
        handleShow();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user._id} user={user} updateUser={updateUser}></User>
        ))}
      </tbody>
      <UpdateModal
        show={show}
        handleClose={handleClose}
        submitPeople={updateSubmit}
        user={user}
      ></UpdateModal>
    </Table>
  );
};

export default Home;
