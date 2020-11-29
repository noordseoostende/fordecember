import React from "react";
import { Switch, Route } from 'react-router-dom';

function App() {
  return <Switch>

  <Route exact path="/">
  Dat is HPagina
  </Route>

  <Route exact path="/sterren">
  Dat is Sterren
  </Route>

  <Route>Dat is 404 pagina</Route>

    </Switch>;
}

export default App;
