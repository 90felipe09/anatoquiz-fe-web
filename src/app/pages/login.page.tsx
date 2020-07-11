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
import { StyledImage } from 'components/atomic/atm.image.component';
import Handshake from 'assets/images/handshake.jpg';
import Idea from 'assets/images/idea.jpg';
import { styleguide } from 'components/styleguide';
import { GlobalState } from 'app/components/global-state/global-state.provider';
import { LoginContentOption } from 'app/components/menu-options/menu-options';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);

  useEffect(() => {
    !!context.token && history.push('/menu');
  }, []);

  return (
    <Root>
      <BodyContent>
      <HBox>
          <HBoxItem vAlign='center'>
            <H4>Login</H4>
          </HBoxItem>
        </HBox>
        <HBox>
          <HBoxItem>
            <LoginContentOption />
          </HBoxItem>
        </HBox>
      </BodyContent>
    </Root>
  );
};
