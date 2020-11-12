import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/signIn/signIn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/signin"]}>
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
