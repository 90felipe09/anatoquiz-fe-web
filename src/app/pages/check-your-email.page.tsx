import { Root, HBox, HBoxItem, VSeparator, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React from 'react';
import { H1, Body, H4 } from 'components/atomic/atm.typography.styled';
import { BodyContent } from 'components/atomic/atm.wrapper.component';
import { useParams } from 'react-router-dom';

export interface CheckYourEmailPageProps {}

export const CheckYourEmailPage: React.FC<CheckYourEmailPageProps> = props => {
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
            <H1>Abra o link que lhe enviamos para ter acesso ao link para validar a sua conta</H1>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
