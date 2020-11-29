import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Sterren from './pages/Sterren';

function App() {
  return (


    <Switch>
  
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/sterren">
        <Sterren />
      </Route>

      <Route><div>Deze was niet gevonden</div></Route>

    </Switch>

  );
}

export default App;
