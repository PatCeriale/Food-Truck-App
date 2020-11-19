import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import User from "./pages/User/User";
import Location from "./pages/Location/Location";
import Search from "./pages/Search/Search";
import Truck from "./pages/Truck/Truck";
// import "./app.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="content-wrap">
        <Navbar />
        <Switch>
          <Route exact path={["/Home", "/"]}>
            <Home />
          </Route>
          <Route exact path={["/SignIn"]}>
            <SignIn />
          </Route>
          <Route exact path={["/SignUp"]}>
            <SignUp />
          </Route>
          <Route exact path={["/user"]}>
            <User />
          </Route>
          <Route exact path={["/location"]}>
            <Location />
          </Route>
          <Route exact path={["/search"]}>
            <Search />
          </Route>
          <Route exact path={["/truck"]}>
            <Truck />
          </Route>
        </Switch>
      </div>
      <Footer className="footer-container" />
    </Router>
  );
}

export default App;
