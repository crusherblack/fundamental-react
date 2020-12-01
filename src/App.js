import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  //penggunaan var
  var title = "Hello World";
  var title = "Title Baru";

  //penggunaan let
  let greeting = "Selamat";
  let day = "Night";

  if (day === "Night") {
    greeting = greeting + " Malam";
  } else {
    greeting = greeting + " Pagi";
  }

  //penggunaan const
  const appName = "Belajar React JS";

  //function
  // function printHelloWorld() {
  //   return "hello world";
  // }

  //return jsx menggunakan arrow function
  const printHelloWorld = (params) => {
    return (
      <>
        <h1>{params}</h1>
        <h2>Selamat Pagi</h2>
      </>
    );
  };

  //function yang dijalankan ketika event onclick dijalankan
  function sumNumber(number1, number2) {
    console.log(number1 + number2);
  }

  return (
    <>
      <Header />
      <Layout>
        <h1>{title}</h1>
        <h1>{greeting}</h1>
        <h1>{appName}</h1>
        <h1>{printHelloWorld("Hello World")}</h1>
        <button onClick={() => sumNumber(1, 2)}>Click Me</button>
      </Layout>
      <Footer />
    </>
  );
}

function Footer() {
  return <h1>Ini adalah footer</h1>;
}

export default App;
