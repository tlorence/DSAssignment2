import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./includes/navBar/Nav";
import Login from "./views/Login/Login";
import Items from "./views/Items/Items";
import AddItems from "./views/AddItems/AddItems";
import DeliveryMethod from "./views/Payment/Dialog-Delivery/DeliveryMethod";
import PaymentMethod from "./views/Payment/Dialog-Payment/PaymentMethod";

function App() {
  // console.log({ItemsData});
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/store">
            <Items />
          </Route>
          <Route path="/addItems">
            <AddItems />
          </Route>
          <Route path="/deliverymethod">
            <DeliveryMethod />
          </Route>
          <Route path="/paymentmethod">
            <PaymentMethod />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
