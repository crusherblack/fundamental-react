import { useState, useEffect } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Card from "./components/Card";

//import Dropdown
import { Dropdown, Modal, Button } from "react-bootstrap";

//css
import "./app-style.css";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  //useEffect
  useEffect(() => {
    //effect, code, function etc
    return () => {
      //cleanup function
    };
  }, []); //dependencies

  useEffect(() => {
    console.log("effect dijalankan");
  }, []);

  useEffect(() => {
    console.log("Berjalan terus menerus setiap ada render");
  });

  useEffect(() => {
    console.log("Hanya berjalan sekali");
  }, []);

  useEffect(() => {
    console.log(
      "Akan berjalan kembali setiap kali ada perubahan pada state count"
    );
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("dijalankan sebelum component didestroy");
    };
  }, []);

  const courses = [
    {
      id: 1,
      title: "React.js untuk Pemula",
      description: "Pas buat kamu yang baru menganal & belajar react.js",
      imageUrl:
        "https://file.mejik.id/microgen-lms1580923239567/course/hldks2reactjs.png",
    },
    {
      id: 2,
      title: "Javascript untuk Pemula",
      description: "Pas buat kamu yang pengen belajar javascript",
      imageUrl:
        "https://file.mejik.id/microgen-lms1580923239567/course/lwxzxfjavascript.png",
    },
    {
      id: 3,
      title: "HTML & CSS Fundamental",
      description:
        "Panduan lengkap untuk membuat aplikasi WEB frontend dengan HTML & CSS untuk kamu yang baru ingin memulai karir sebagai web developer.",
      imageUrl:
        "https://file.mejik.id/microgen-lms1580923239567/course/opjpvwhtmlcss.png",
    },
    {
      id: 4,
      title: "Git untuk Pemula",
      description: "Belajar tentang GIT untuk pemula.",
      imageUrl:
        "https://file.mejik.id/microgen-lms1580923239567/course/ot0vjigitgithub.png",
    },
  ];

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
        {/* perulangan pada component Card */}
        <div class="row">
          {courses.map((course) => (
            <Card
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              key={course.id}
            />
          ))}
        </div>

        {/* conditional rendering dan perulangan */}
        <ul>
          {listBooks.map((book, index) => (
            <li
              style={{
                color: book.isRed ? "red" : "green",
              }}
              key={index}
            >
              <h2> {book.name}</h2>
            </li>
          ))}
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
