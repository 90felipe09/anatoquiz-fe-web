import { HBox, HBoxItem, Root, VSeparator } from 'components/atomic/obj.grid.components';
import { MenuOption, NavigationBar } from 'components/atomic/org.navbar.component';
import React from 'react';
import { PrimaryButton } from '../components/atomic/atm.buttons.component';

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
            <PrimaryButton
              text='f'
              onClick={() => {
                console.log();
              }}
            />
          </HBoxItem>
          <HBoxItem>
            <PrimaryButton
              text='f'
              onClick={() => {
                console.log();
              }}
            />
          </HBoxItem>
        </HBox>
        <VSeparator />
      </Root>
    );
  };
  const menuOptions: MenuOption[] = [
    {
      optionName: 'Login',
      onClick: () => {
        console.log('as');
      },
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
      <NavigationBar authMenuOptions={menuOptions} menuOptions={menuOptions} logo='LOGO' />
    </Root>
  );
};
