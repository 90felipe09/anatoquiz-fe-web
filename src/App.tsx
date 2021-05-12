import React from 'react';
import { H1 } from 'components/atomic/atm.typography.styled';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { QuestionPage } from 'app/pages/question.page';
import styled from 'styled-components';
import { AboutPage } from 'app/pages/about.page';
import { MenuPage } from 'app/pages/menu.page';
import { HomePage } from 'app/pages/home.page';
import { MenuOption, NavigationBar } from 'components/atomic/org.navbar.component';
import { Root, VSeparator, HBox, HBoxItem } from 'components/atomic/obj.grid.components';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';
import { menuOptions, authMenuOptions } from 'app/components/menu-options/menu-options';
import { TreinoPage } from 'app/pages/treino.page';
import { AmigosPage } from 'app/pages/amigos.page';
import { CategoryPage } from 'app/pages/category.page';
import { RandomPage } from 'app/pages/random.page';
import { CountdownPage } from 'app/pages/countdown.page';
import { LevelSelectionPage } from 'app/pages/level-selection.page';
import { WorldPage } from 'app/pages/world-selection.page';
import { DonePage } from 'app/pages/done.page';
import { GlobalState, defaultGlobalState } from 'app/components/global-state/global-state.provider';
import { LoginPage } from 'app/pages/login.page';
import { CreateAccountPage } from 'app/pages/create-account.page';
import { ForgotPasswordPage } from 'app/pages/forgot-password.page';
import { HowToRecoverPasswordPage } from 'app/pages/guide-to-password-recovery.page';
import { PasswordRedefinitionPage } from 'app/pages/password-redefinition.page';
import { CheckYourEmailPage } from 'app/pages/check-your-email.page';
import { AccountValidationPage } from 'app/pages/account-validation.page';


function App() {
  return (
    <Router>
      <GlobalState.Provider value={defaultGlobalState}>
        <NavigationBar authMenuOptions={authMenuOptions} menuOptions={menuOptions} logo='ANATOQUIZ' />
        <Switch>
          <Route path='/check-your-email' component={CheckYourEmailPage} />
          <Route path='/validate-account/:token' component={AccountValidationPage} />
          <Route path='/password-change/:token' component={PasswordRedefinitionPage} />
          <Route path='/how-to-recover-password' component={HowToRecoverPasswordPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/create-account' component={CreateAccountPage} />
          <Route path='/forgot-password' component={ForgotPasswordPage} />
          <Route path='/done' component={DonePage} />
          <Route path='/world' component={WorldPage} />
          <Route path='/level' component={LevelSelectionPage} />
          <Route path='/countdown' component={CountdownPage} />
          <Route path='/random' component={RandomPage} />
          <Route path='/category' component={CategoryPage} />
          <Route path='/amigos' component={AmigosPage} />
          <Route path='/treino' component={TreinoPage} />
          <Route path='/menu' component={MenuPage} />
          <Route path='/sobre' component={AboutPage} />
          <Route path='/question' component={QuestionPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </GlobalState.Provider>
    </Router>
  );
}

export default App;
