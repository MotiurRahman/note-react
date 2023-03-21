import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const deleteUser = (id) => {
    if (window.confirm("Would you like to delete it?")) {
      fetch(`http://localhost:3000/users?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  const updateUser = (id) => {
    //  alert(`update user ${id}`);

    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>
        <Button
          className="mx-2"
          variant="danger"
          onClick={() => {
            deleteUser(user._id);
          }}
        >
          Delete
        </Button>
        <Button
          variant="success"
          onClick={() => {
            updateUser(user._id);
          }}
        >
          Update
        </Button>
      </td>
    </tr>
  );
};

export default User;
