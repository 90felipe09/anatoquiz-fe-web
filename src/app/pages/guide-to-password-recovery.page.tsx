import { Root, HBox, HBoxItem, VSeparator, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React from 'react';
import { H1, Body, H4 } from 'components/atomic/atm.typography.styled';
import { BodyContent } from 'components/atomic/atm.wrapper.component';

export interface HowToRecoverPasswordPageProps {}

export const HowToRecoverPasswordPage: React.FC<HowToRecoverPasswordPageProps> = props => {
  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <HBox>
          <HBoxItem hAlign='center' vAlign='center'>
            <H4>Enviamos um email para você</H4>
          </HBoxItem>
        </HBox>
        <HBox>
          <HBoxSeparator />
          <HBoxItem hAlign='center' vAlign='center'>
            <H1>Abra o link que lhe enviamos para ter acesso ao link de redefinição de senha</H1>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
