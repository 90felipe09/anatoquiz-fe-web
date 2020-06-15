import Menu from 'assets/icon/Menu.png';
import { styleguide } from 'components/styleguide';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { StyledIcon } from './atm.icon.components';
import { Logo } from './atm.logo.component';
import { H2 } from './atm.typography.styled';
import { HBox, HBoxItem, VBox } from './obj.grid.components';
import { useHistory } from 'react-router-dom';
import { GlobalState } from 'app/components/global-state/global-state.provider';

//Replicate to template

export interface NavigationBarProps {
  logo: string;
  menuOptions: MenuOption[];
  authMenuOptions: MenuOption[];
}

const StyledNavigationBar = styled.nav`
  z-index: 2000;
  background-color: white;
  position: fixed;
  width: 100vw;
  top: 0;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 0px;
`;

export const NavigationBar: React.FC<NavigationBarProps> = props => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const context = useContext(GlobalState);
  const history = useHistory();

  const toggleMenuOpen = () => {
    setOpenedMenu(!openedMenu);
  };

  const logOut = () => {
    context.token = '';
  }
  
  props.authMenuOptions[props.authMenuOptions.length - 1].onClick = logOut;

  return (
    <HBox>
      <StyledNavigationBar>
        <HBox hAlign='center'>
          <Logo logo={props.logo} onClick={() => history.push('/')} />
          <HBoxItem hAlign='center' vAlign='flex-end'>
            <StyledIcon clickable={true} source={Menu} onClick={toggleMenuOpen} />
          </HBoxItem>
        </HBox>
        {openedMenu && (!!context.token ? (
          <DropDownMenuNav menuItems={props.authMenuOptions} />
        ) : (
          <DropDownMenuNav menuItems={props.menuOptions} />
        ))}
      </StyledNavigationBar>
    </HBox>
  );
};

export interface MenuOption {
  optionName: string;
  redirectTo?: string;
  expandable?: boolean;
  onClick?: () => void;
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
  const history = useHistory();
  const handleOnClick = () => {
    props.onClick && props.onClick();
    props.redirectTo && history.push(props.redirectTo);
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
      redirectTo={menuItem.redirectTo}
      optionName={menuItem.optionName}
      onClick={menuItem.onClick}
    />
  ));
  return <VBox>{menuItems}</VBox>;
};
