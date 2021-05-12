import { Root, HBox, HBoxItem, VSeparator } from 'components/atomic/obj.grid.components';
import React from 'react';
import { H1 } from 'components/atomic/atm.typography.styled';

export interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = props => {
  return (
    <Root>
      <VSeparator />
      <HBox>
        <HBoxItem hAlign='center' vAlign='center'>
          <H1>Feito por</H1>
        </HBoxItem>
      </HBox>
    </Root>
  );
};
