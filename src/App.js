import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import Fetch from "./pages/Fetch";
import Axios from "./pages/Axios";
import Todo from "./pages/Todo";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/post/:id" component={Detail} />
        <Route exact path="/fetch" component={Fetch} />
        <Route exact path="/axios" component={Axios} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
