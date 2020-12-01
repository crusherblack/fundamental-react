import { useState } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";

//import Dropdown
import { Dropdown } from "react-bootstrap";

//css
import "./app-style.css";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

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

  return (
    <>
      <Header {...props} />
      <Layout>
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
      </Layout>
      <Footer />
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
