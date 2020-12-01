import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <h1>Hello World</h1>
      </Layout>
      <Footer />
    </>
  );
}

function Footer() {
  return <h1>Ini adalah footer</h1>;
}

export default App;
