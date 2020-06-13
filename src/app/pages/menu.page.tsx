import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState } from 'react';
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
import { H2, H1, H3 } from 'components/atomic/atm.typography.styled';
import { CoinsBar } from 'components/atomic/mol.coins-bar.component';
import { StyledImage } from 'components/atomic/atm.image.component';
import Avatar from 'assets/mock/Avatar.png';
import { styleguide } from 'components/styleguide';

export interface MenuPageProps {}

export const MenuPage: React.FC<MenuPageProps> = props => {
  const history = useHistory();

  return (
    <Root>

      <BodyContent>
        <VSeparator/>
        <CoinsBar coinsAmount={90}/>
        <VSeparator/>
        <VSeparator/>
        <VSeparator/>
        <VSeparator/>
        <VSeparator/>
        <VSeparator/>

        <HBox>
          <HBoxSeparator/>
          <HBoxItem vAlign='center' >
            <StyledImage src={Avatar} width={styleguide.sizes.avatar} />
          </HBoxItem>
          <HBoxSeparator/>
        </HBox>

        <VSeparator/>
        <VSeparator/>
        <VSeparator/>
        <VSeparator/>

        <HBox>
          <HBoxSeparator/>
          <HBoxItem vAlign='center' >
            <PrimaryButton text='Modo carreira' onClick={() => {history.push('/world')}} />
          </HBoxItem>
          <HBoxSeparator/>
        </HBox>

        <HBox>
          <HBoxSeparator/>
          <HBoxItem vAlign='center' >
            <PrimaryButton text='Jogar com amigos' onClick={() => {history.push('/amigos')}} />
          </HBoxItem>
          <HBoxSeparator/>
        </HBox>

        <HBox>
          <HBoxSeparator/>
          <HBoxItem vAlign='center' >
            <PrimaryButton text='Loja' onClick={() => {}} />
          </HBoxItem>
          <HBoxSeparator/>
        </HBox>

        <HBox>
          <HBoxSeparator/>
          <HBoxItem vAlign='center' >
            <PrimaryButton text='Modo treino' onClick={() => {history.push('/treino')}} />
          </HBoxItem>
          <HBoxSeparator/>
        </HBox>
        
      </BodyContent>
    </Root>
  );
};
