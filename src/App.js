import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"

import './scss/custom.scss';

function App() {

  console.log(process.env.CI);

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