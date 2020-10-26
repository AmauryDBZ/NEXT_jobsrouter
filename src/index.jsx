import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";

import Main from './components/Main';
import Home from './pages/Home';
import Job from './pages/Job';

const App = () => {

  return(
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/job/:jobSlug">
              <Job />
            </Route>
          </Switch>

      </Router>
      <Main />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
