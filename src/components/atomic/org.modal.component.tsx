import React from 'react';
import styled from 'styled-components';
import { styleguide } from '../styleguide';
import { HBox, Root, VBox, VSeparator } from './obj.grid.components';

export const StyledModal = styled.span`
  z-index: 2;
  display: flex;
  flex: 1;
  width: ${styleguide.sizes.modalWidth};
  background-color: ${styleguide.colors.white};
  padding: ${styleguide.spacing.medium};
`;

export interface ModalInterface {
  children: any;
}

export const Modal: React.FC<ModalInterface> = props => {
  return (
    <Root>
      <VBox hAlign='center' vAlign='center'>
        <VSeparator />
        <HBox hAlign='center' vAlign='center'>
          <StyledModal>{props.children}</StyledModal>
        </HBox>
        <VSeparator />
      </VBox>
    </Root>
  );
};

export const DarkenedFilter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
