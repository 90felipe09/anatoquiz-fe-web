import React, { useState } from 'react';
import styled from 'styled-components';
import { styleguide } from 'components/styleguide';
import { HBox, HBoxItem, Root, VBox } from './obj.grid.components';
import { H1, H2 } from './atm.typography.styled';
import { StyledIcon } from './atm.icon.components';
import Menu from 'assets/icon/Menu.png';
import { Logo } from './atm.logo.component';

//Replicate to template

export interface NavigationBarProps {
  logo: string;
  menuOptions: MenuOption[];
}

const StyledNavigationBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const NavigationBar: React.FC<NavigationBarProps> = props => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const toggleMenuOpen = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <HBox>
      <StyledNavigationBar>
        <HBox hAlign='center'>
          <Logo logo={props.logo} />
          <HBoxItem hAlign='center' vAlign='flex-end'>
            <StyledIcon clickable={true} source={Menu} onClick={toggleMenuOpen} />
          </HBoxItem>
        </HBox>
        {openedMenu && <DropDownMenuNav menuItems={props.menuOptions} />}
      </StyledNavigationBar>
    </HBox>
  );
};

export interface MenuOption {
  optionName: string;
  onClick: () => void;
  expandable?: boolean;
  content?: any;
}

export interface DropDownMenuProps {
  menuItems: MenuOption[];
}

const StyledDropDownMenuItemNav = styled.span`
  box-shadow: 0px -2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  border-width: 2px;
  :hover {
    cursor: pointer;
    background-color: ${styleguide.colors.lightGray};
  }
`;

const DropDownMenuNavItem: React.FC<MenuOption> = props => {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    props.onClick();
    setExpanded(!expanded);
  };

  return (
    <StyledDropDownMenuItemNav>
      <VBox>
        <HBox onClick={handleOnClick} hAlign='center'>
          <H2>{props.optionName}</H2>
        </HBox>
        {props.expandable && expanded && <HBox>{props.content}</HBox>}
      </VBox>
    </StyledDropDownMenuItemNav>
  );
};

const DropDownMenuNav: React.FC<DropDownMenuProps> = props => {
  const menuItems = props.menuItems.map(menuItem => (
    <DropDownMenuNavItem
      expandable={menuItem.expandable}
      content={menuItem.content}
      onClick={menuItem.onClick}
      optionName={menuItem.optionName}
    />
  ));
  return <VBox>{menuItems}</VBox>;
};
