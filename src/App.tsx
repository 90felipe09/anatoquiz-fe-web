import React from 'react';
import { H1 } from 'components/atomic/atm.typography.styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QuestionPage } from 'app/pages/question.page';
import styled from 'styled-components';
import { AboutPage } from 'app/pages/about.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/sobre' component={AboutPage} />
        <Route path='/' component={QuestionPage} />
      </Switch>
    </Router>
  );
}

export default App;
