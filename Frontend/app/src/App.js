import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./includes/navBar/Nav";
import Login from "./views/Login/Login";
import Items from "./views/Items/Items";
// import { Cart } from "./views/Cart/Cart";
import AddItems from "./views/AddItems/AddItems";

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
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
