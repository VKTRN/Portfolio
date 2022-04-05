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
      <Router>
        <Switch>

          <Route exact path="/shop/">
            <Home />
          </Route>

          <Route path="shop/products/:category">
            <ProductList />
          </Route>

          <Route path="shop/product/:id">
            <Product />
          </Route>

          <Route path="shop/cart">
            <Cart />
          </Route>

          <Route path="shop/success">
            <Success />
          </Route>

          <Route path="/login">
            {user ? <Redirect to="/" />: <Login />}
          </Route>

          <Route path="shop/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
