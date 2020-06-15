import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState, useContext, useEffect } from 'react';
import { NavigationBar, MenuOption } from 'components/atomic/org.navbar.component';
import { BodyContent } from 'components/atomic/atm.wrapper.component';
import {
  QuestionCard,
  QuestionCardStatusEnum,
  QuestionCardKnowMoreDataProps,
  QuestionCardDataProps,
} from 'app/components/question-card-modules/question-cards-modules';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';
import { useHistory } from 'react-router';
import { H2, H1, H3, H4 } from 'components/atomic/atm.typography.styled';
import { CoinsBar } from 'components/atomic/mol.coins-bar.component';
import { StyledImage } from 'components/atomic/atm.image.component';
import Avatar from 'assets/mock/Avatar.png';
import { styleguide } from 'components/styleguide';
import { GlobalState } from 'app/components/global-state/global-state.provider';

export interface TreinoPageProps {}

export const TreinoPage: React.FC<TreinoPageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);

  const handleOnTrainOption = (category: string) => {
    history.push('/countdown');
  };
  useEffect(() => {
    !context.token && history.push('/');
  }, []);

  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <CoinsBar coinsAmount={90} />
        <VSeparator />
        <VSeparator />
        <VSeparator />
        <VSeparator />
        <VSeparator />
        <VSeparator />

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H4>O seu recorde é</H4>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H3>27</H3>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H4>Escolha uma categoria</H4>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <PrimaryButton text='Sistema nervoso' onClick={() => handleOnTrainOption('Sistema nervoso')} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <PrimaryButton text='Toráxico' onClick={() => handleOnTrainOption('Toráxico')} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
