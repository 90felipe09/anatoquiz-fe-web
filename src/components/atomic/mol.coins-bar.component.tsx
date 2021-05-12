import styled from 'styled-components';
import { Body, H4, H3 } from './atm.typography.styled';
import React from 'react';
import { HBox, HBoxItem } from './obj.grid.components';

const StyledCoinsBar = styled.span`
  z-index: 2000;
  background-color: white;
  position: fixed;
  width: 100vw;
  top: 62px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 0px;
`;

export interface CoinsBarProps {
  coinsAmount: number;
}

export const CoinsBar: React.FC<CoinsBarProps> = props => {
  return (
    <StyledCoinsBar>
      <HBox>
        <HBoxItem vAlign='center'>
          <H3>{props.coinsAmount} ATP</H3>
        </HBoxItem>
      </HBox>
    </StyledCoinsBar>
  );
};
