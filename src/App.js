import {useState, useRef, useEffect, useContext} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"

import './scss/custom.scss';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;