import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"

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
        <Route path="/shop">
          <Shop/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;