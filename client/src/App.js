import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Root/Login";
import "./styles.scss";
import PrivateRoute from "./components/Root/PrivateRoute";
import BubblePage from "./components/Bubble/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
