import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import Fetch from "./pages/Fetch";
import Axios from "./pages/Axios";
import Todo from "./pages/Todo";
import UseReducer from "./pages/UseReducer";

import Navbar from "./components/Navbar";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/post/:id" component={Detail} />
          <Route exact path="/fetch" component={Fetch} />
          <Route exact path="/axios" component={Axios} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/use-reducer" component={UseReducer} />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}
export default App;
