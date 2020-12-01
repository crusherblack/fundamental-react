import { useState } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";

//import Dropdown
import { Dropdown, Modal, Button } from "react-bootstrap";

//css
import "./app-style.css";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const props = {
    title: "Saya dari parent",
    object: {
      id: 1,
      name: "Object guys",
    },
    array: [
      {
        id: 1,
        title: "Kucing",
      },
      {
        id: 2,
        title: "Ayam",
      },
    ],
    showAlert: () => {
      alert("Hay ini function dari parent");
    },
  };

  // data listbooks untuk conditional rendering
  const listBooks = [
    { name: "Buku Matematika", isRed: true },
    { name: "Buku IPA", isRed: false },
  ];

  return (
    <>
      <Header {...props} />
      {/* tonggle modal button */}
      <Button variant="secondary" onClick={() => setShowModal(true)}>
        Open Modal
      </Button>

      <Layout>
        {/* conditional rendering */}
        <ul>
          <li
            style={{
              color: listBooks[0].isRed ? "red" : "green",
            }}
          >
            <h2> {listBooks[0].name}</h2>
          </li>
          <li
            style={{
              color: listBooks[1].isRed ? "red" : "green",
            }}
          >
            <h2>{listBooks[1].name}</h2>
          </li>
        </ul>
        {/* classname */}
        <button className="btn-secondary" onClick={() => setCount(count + 1)}>
          Increament
        </button>
        {/* bootstrap */}
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increament
        </button>
        <button
          style={styles.buttonPrimary}
          onClick={() => setCount(count + 1)}
        >
          Increament
        </button>
        {/* inline styling */}
        <h1
          style={{
            backgroundColor: "red",
            fontSize: "18px",
            color: "white",
          }}
        >
          Count: {count}
        </h1>
        <button
          style={styles.buttonPrimary}
          onClick={() => setCount(count - 1)}
        >
          Decreament
        </button>
        {/* Dropdown react-bootstrap */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* load image dari folder public */}
        <img
          src="/dumbways.png"
          alt="dumbways image"
          style={{
            height: "300px",
            display: "block",
            marginTop: "10px",
          }}
        />
        {/*         load image dari internet */}
        <img
          src="https://images.unsplash.com/photo-1601452168062-ead9e4519929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="gambar dari internet"
          style={{
            height: "300px",
            display: "block",
            marginTop: "10px",
          }}
        />
      </Layout>
      <Footer />
      {/* modal bootstrap */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Footer() {
  return <h1>Ini adalah footer</h1>;
}

export default App;

/* Reusable Styles */

const styles = {
  buttonPrimary: {
    backgroundColor: "red",
    padding: "10px 20px",
    borderColor: "red",
    borderRadius: "5px",
    color: "white",
    fontSize: "18px",
  },
};
