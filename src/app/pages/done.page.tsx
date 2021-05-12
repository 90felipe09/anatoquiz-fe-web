import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState, useEffect, useContext } from 'react';
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

export interface DonePageProps {}

export const DonePage: React.FC<DonePageProps> = props => {
  const history = useHistory();
  const [win, setWin] = useState<boolean>(false);
  const context = useContext(GlobalState);
  const [reward, setReward] = useState<number>(0);

  useEffect(() => {
    setWin(true);
    setReward(90);
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
            <StyledImage src={Avatar} width={styleguide.sizes.avatar} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <VSeparator />

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H4>{win ? 'Você ganhou!' : 'Você perdeu'}</H4>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H3>{reward && `+ ${reward} ATP`}</H3>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <PrimaryButton
              text='Retornar ao menu'
              onClick={() => {
                history.push('/menu');
              }}
            />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
