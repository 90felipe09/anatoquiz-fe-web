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
import { H2, H1, H3 } from 'components/atomic/atm.typography.styled';
import { StyledImage } from 'components/atomic/atm.image.component';
import Handshake from 'assets/images/handshake.jpg';
import Idea from 'assets/images/idea.jpg';
import { styleguide } from 'components/styleguide';
import { GlobalState } from 'app/components/global-state/global-state.provider';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);

  useEffect(() => {
    !!context.token && history.push('/menu');
  }, []);

  const handleStartPlaying = () => {
    history.push('/login');
  };

  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <VSeparator />
        <VSeparator />
        <HBox>
          <HBoxItem vAlign='center'>
            <H1>ANATOQUIZ</H1>
          </HBoxItem>
        </HBox>
        <VSeparator />
        <HBox>
          <HBoxItem vAlign='center'>
            <H2>Teste os seus conhecimentos</H2>
          </HBoxItem>
        </HBox>
        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <StyledImage src={Idea} width={styleguide.sizes.images} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
        <VSeparator />
        <HBox>
          <HBoxItem vAlign='center'>
            <H3>Jogue com amigos</H3>
          </HBoxItem>
        </HBox>
        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <StyledImage src={Handshake} width={styleguide.sizes.images} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <PrimaryButton text='Comece a jogar agora' onClick={handleStartPlaying} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
