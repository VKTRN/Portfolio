import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import VideoEditor from "./pages/VideoEditor/VideoEditor"
import {Provider} from 'react-redux'
import store from "./redux/store";
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
        <Route path="/player">
          <Provider store={store}>
            <VideoEditor/>
          </Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;