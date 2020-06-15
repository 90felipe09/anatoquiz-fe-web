import { useHistory } from 'react-router-dom';
import { MenuOption } from 'components/atomic/org.navbar.component';
import { Root, VSeparator, HBox, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';
import React, { useState, useContext } from 'react';
import { Forms } from 'components/atomic/org.forms.component';
import { TextInputInterface } from 'components/atomic/mol.forms-input.component';
import { GlobalState } from '../global-state/global-state.provider';
import CryptoJS from 'crypto-js';

const LoginContentOption = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const context = useContext(GlobalState);
  const history = useHistory();

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
      dispatcher: setPassword,
      value: password,
    },
  ];

  const handleLogin = () => {
    console.log(password, username);
    const md5OfUserAndPassword = CryptoJS.MD5(password + username);
    context.token = md5OfUserAndPassword.toString();
    console.log(context);
    history.push('/menu');
  };

  return (
    <Root bgColor={false}>
      <VSeparator />
      <HBox>
        <HBoxSeparator />
        <HBoxItem>
          <Forms types={inputTypes} onSubmit={handleLogin} textSubmit={'Login'} />
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
