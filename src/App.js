import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/signIn/signIn";

function App() {
  return (
    <div className="page-container">
      <Router>
        <div className="content-wrap">
          <Navbar />
          <Switch>
            <Route exact path={["/signin"]}>
              <SignIn />
            </Route>
          </Switch>
          <Footer class="footer-container" />
        </div>
      </Router>
    </div>
  );
}

export default App;
