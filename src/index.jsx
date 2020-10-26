import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Cards from './components/Searchbar';
import Home from './pages/Home';

const App = () => {

  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Cards />

      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
