import { useState } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";

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
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decreament</button>
      </Layout>
      <Footer />
    </>
  );
}

function Footer() {
  return <h1>Ini adalah footer</h1>;
}

export default App;
