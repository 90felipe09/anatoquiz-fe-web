import React from 'react';
import { H1 } from 'components/atomic/atm.typography.styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/consultorio/:id/:room'>
          <H1>Sala</H1>
        </Route>
        <Route path='/consultorio/:id'>
        </Route>
        <Route path='/:id/:room'>
          <H1>Sala</H1>
        </Route>
        <Route path='/:id'>
        </Route>
        <Route path='/'>
          <H1>Home</H1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
