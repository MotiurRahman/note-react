import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";
import Table from "react-bootstrap/Table";

const Home = () => {
  const users = useLoaderData();
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
          <User key={user._id} user={user}></User>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
