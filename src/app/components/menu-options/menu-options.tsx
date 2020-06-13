import { useHistory } from 'react-router-dom';
import { MenuOption } from 'components/atomic/org.navbar.component';
import { Root, VSeparator, HBox, HBoxItem } from 'components/atomic/obj.grid.components';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';
import React from 'react';



const LoginContentOption = () => {
  return (
    <Root bgColor={true}>
      <VSeparator />
      <HBox>
        <HBoxItem>
          <PrimaryButton text='f' onClick={() => {}} />
        </HBoxItem>
        <HBoxItem>
          <PrimaryButton text='f' onClick={() => {}} />
        </HBoxItem>
      </HBox>
      <VSeparator />
    </Root>
  );
};

export const menuOptions: MenuOption[] = [
  {
    optionName: 'Login',
    onClick: () => {},
    expandable: true,
    content: <LoginContentOption />,
  },
  {
    optionName: 'Sobre',
    redirectTo: '/sobre',
  },
];
