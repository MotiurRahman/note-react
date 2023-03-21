import React, { useState } from "react";
import { Button } from "react-bootstrap";

const User = ({ user, updateUser }) => {
  const deleteUser = (id) => {
    if (window.confirm("Would you like to delete it?")) {
      fetch(`http://localhost:5000/users?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
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
