import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/Home"]}>
            <Home />
          </Route>
          <Route exact path={["/signin"]}>
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
