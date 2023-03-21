import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import PopupView from "../ModalView/PopupView";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addPeople = () => {
    handleShow();
  };

  const submitPeople = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;

    console.log({ name, address });

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status != "fail") {
          handleClose();
          window.location.reload();
        } else {
          alert(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"user"}>
              Users
            </Nav.Link>
            <Nav.Link as={Link} to={"about"}>
              About
            </Nav.Link>
            <Button variant="primary" onClick={addPeople}>
              Add People
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <PopupView
        show={show}
        handleClose={handleClose}
        submitPeople={submitPeople}
      ></PopupView>
    </Navbar>
  );
};

export default Header;
