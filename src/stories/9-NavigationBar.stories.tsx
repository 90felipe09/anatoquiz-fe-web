import React, { useState } from 'react';
import { PrimaryButton } from '../components/atomic/atm.buttons.component';
import { H1 } from '../components/atomic/atm.typography.styled';
import { DarkenedFilter, Modal } from '../components/atomic/org.modal.component';
import { weekDayEnum } from 'models/horarios.usecase';
import { NavigationBar, MenuOption } from 'components/atomic/org.navbar.component';
import { Root, VSeparator, HBox, HBoxItem } from 'components/atomic/obj.grid.components';

export default {
  title: 'Navigation Bar',
  component: NavigationBar,
};

export const NavigationBarStory = () => {
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
  const menuOptions: MenuOption[] = [
    {
      optionName: 'Login',
      onClick: () => {},
      expandable: true,
      content: <LoginContentOption />,
    },
    {
      optionName: '123',
      onClick: () => console.log(123),
    },
    {
      optionName: '123',
      onClick: () => console.log(123),
    },
  ];

  return (
    <Root>
      <NavigationBar menuOptions={menuOptions} logo='LOGO' />
    </Root>
  );
};
