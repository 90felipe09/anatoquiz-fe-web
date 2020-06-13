import styled from 'styled-components';
import React from 'react';
import { HBoxItem } from './obj.grid.components';
import { H1 } from './atm.typography.styled';
import { styleguide } from 'components/styleguide';

export const StyledLogo = styled.span`
  padding: ${styleguide.spacing.medium};
  :hover {
    cursor: pointer;
  }
`;

export interface LogoProps {
  logo: string;
  onClick: () => void;
}

export const Logo: React.FC<LogoProps> = props => {
  return (
    <StyledLogo onClick={props.onClick}>
      <HBoxItem>
        <H1>{props.logo}</H1>
      </HBoxItem>
    </StyledLogo>
  );
};
