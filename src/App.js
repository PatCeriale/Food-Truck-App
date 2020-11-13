import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/signIn/signIn";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="content-wrap">
        <Navbar />
        <Switch>
          <Route exact path={["/signin"]}>
            <SignIn />
          </Route>
        </Switch>
      </div>
      <Footer class="footer-container" />
    </Router>
  );
}

export default App;
