import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Episodes from "./pages/Episodes";
import CharactersList from "./pages/CharactersList";
import CharacterProfile from "./pages/CharacterProfile";

function RouterView() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Episodes} />
        <Route path="/characters/:id" component={CharactersList} />
        <Route path="/character/:id" component={CharacterProfile} />
      </Switch>
    </Router>
  );
}

export default RouterView;
