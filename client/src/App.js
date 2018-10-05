import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindArticles from "./pages/FindArticles";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SavedList from "./pages/SavedList";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={FindArticles} />
        <Route exact path="/savedarticles" component={SavedList} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
