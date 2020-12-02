import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Sterren from './pages/Sterren';
import Show from './pages/Show';

function App() {
  return (


    <Switch>
  
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/sterren">
        <Sterren />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route><div>Deze was niet gevonden</div></Route>

    </Switch>

  );
}

export default App;
