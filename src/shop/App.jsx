import Home        from "./pages/Home";
import Product     from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register    from "./pages/Register";
import Login       from './pages/Login'
import Cart        from "./pages/Cart";
import Pay         from "./pages/Pay";
import Success     from "./pages/Success";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import React from 'react';

function App() {

  const user      = useSelector((state) => state.user.currentUser)

  return (
    <div className="App">
      <Router basename='/shop'>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products/:category">
            <ProductList />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/success">
            <Success />
          </Route>

          <Route path="/login">
            {user ? <Redirect to="/" />: <Login />}
          </Route>

          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
