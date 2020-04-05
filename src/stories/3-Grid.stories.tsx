import React from 'react';
import { HBox, Root, HBoxItem, VBox } from 'components/atomic/obj.grid.components';
import { H1, H4, H2, H3, H5 } from 'components/atomic/atm.typography.styled';

export default {
  title: 'Grid',
  component: HBox,
};

export const Grids = () => {
  return (
    <Root>
      <HBox>
        <HBoxItem wrap={false}>
          <H1>Teste</H1>
        </HBoxItem>
        <HBoxItem wrap={false}>
          <H2>Teste</H2>
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem wrap={true}>
          <H3>Teste</H3>
        </HBoxItem>
        <HBoxItem wrap={false}>
          <H4>Teste</H4>
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem wrap={false}>
          <H5>Teste</H5>
        </HBoxItem>
        <HBoxItem wrap={false}>
          <H1>Teste</H1>
        </HBoxItem>
        <VBox>
          <HBoxItem wrap={false}>
            <H2>Teste</H2>
          </HBoxItem>
          <HBoxItem wrap={false}>
            <H3>Teste</H3>
          </HBoxItem>
        </VBox>
      </HBox>
    </Root>
  );
};
