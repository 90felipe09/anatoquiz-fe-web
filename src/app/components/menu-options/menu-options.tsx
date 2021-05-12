import { useHistory } from 'react-router-dom';
import { MenuOption } from 'components/atomic/org.navbar.component';
import { Root, VSeparator, HBox, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';
import React, { useState, useContext } from 'react';
import { Forms } from 'components/atomic/org.forms.component';
import { TextInputInterface } from 'components/atomic/mol.forms-input.component';
import { GlobalState } from '../global-state/global-state.provider';
import CryptoJS from 'crypto-js';
import { login, LoginWithEmailArguments, LoginWithUsernameArguments, LoginResponse } from 'data/auth.datasource';
import { emailValidator } from 'validators/account.validators';
import sha256 from 'sha256';
import { GenericResponse, ErrorResponse } from 'data/response-types.datasource';
import { ErrorMessage } from 'components/atomic/atm.typography.styled';

export const LoginContentOption = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<boolean>(false);
  const context = useContext(GlobalState);
  const history = useHistory();

  const cryptPassword = (rawPassword: string) => {
    setPassword(sha256(rawPassword));
  };

  const inputTypes: TextInputInterface[] = [
    {
      label: 'Nome de usuário',
      type: 'text',
      dispatcher: setUsername,
      value: username,
    },
    {
      label: 'Senha',
      type: 'password',
      dispatcher: cryptPassword,
      value: password,
      forgot: true,
    },
  ];

  const handleSuccessfulLogin = (data: LoginResponse) => {
    context.token = data.content.token;
    context.openedMenu = false;
    history.push('/menu');
  };

  const handleFailedLogin = (error: ErrorResponse) => {
    setLoginError(true);
  };

  const handleLogin = () => {
    let argument;
    if (emailValidator(username)) {
      argument = { email: username, password: password };
    } else {
      argument = { username: username, password: password };
    }

    login(argument).then(handleSuccessfulLogin).catch(handleFailedLogin);
  };

  return (
    <Root bgColor={false}>
      <VSeparator />
      {loginError && (
        <HBox>
          <HBoxSeparator />
          <HBoxItem>
            <ErrorMessage>Credenciais inválidas</ErrorMessage>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      )}

      <HBox>
        <HBoxSeparator />
        <HBoxItem>
          <Forms types={inputTypes} onSubmit={handleLogin} textSubmit={'Login'} />
        </HBoxItem>
        <HBoxSeparator />
      </HBox>
      <HBox>
        <HBoxSeparator />
        <HBoxItem>
          <PrimaryButton text='Criar uma conta' onClick={() => history.push('/create-account')} />
        </HBoxItem>
        <HBoxSeparator />
      </HBox>
      <VSeparator />
    </Root>
  );
};

export const menuOptions: MenuOption[] = [
  {
    optionName: 'Login',
    expandable: true,
    content: <LoginContentOption />,
  },
  {
    optionName: 'Sobre',
    redirectTo: '/sobre',
  },
];

export const authMenuOptions: MenuOption[] = [
  {
    optionName: 'Avatar',
    redirectTo: '/avatar',
  },
  {
    optionName: 'Modo carreira',
    redirectTo: '/world',
  },
  {
    optionName: 'Jogar com amigos',
    redirectTo: '/amigos',
  },
  {
    optionName: 'Loja',
    redirectTo: '/store',
  },
  {
    optionName: 'Sair',
    redirectTo: '/',
  },
];
