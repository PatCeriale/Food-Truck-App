import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Truck from "../Truck/Truck";
import "./Search.css";

export default function Search() {
  return (
    <Router>
      <div>
        <h1>Search Trucks</h1>
      </div>
      <Switch>
        <Route exact path={["/truck"]}>
          <Truck />
        </Route>
        <Link to="/truck">Link to Truck Page</Link>
      </Switch>
    </Router>
  );
}
