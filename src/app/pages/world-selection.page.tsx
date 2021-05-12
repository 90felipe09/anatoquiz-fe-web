import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState, useContext, useEffect } from 'react';
import { NavigationBar, MenuOption } from 'components/atomic/org.navbar.component';
import { BodyContent, ListContent } from 'components/atomic/atm.wrapper.component';
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

export interface WorldPageProps {}

export const WorldPage: React.FC<WorldPageProps> = props => {
  const history = useHistory();
  const worlds = ['Cardiovascular', 'Mediastino', 'Respiratório', 'Encéfalo', 'Medula e anexos'];
  const context = useContext(GlobalState);
  const handleWorldSelection = (world: string) => {
    history.push('/level');
  };
  useEffect(()=>{!context.token && history.push('/');},[]);

  return (
    <Root>
      <BodyContent>
        <HBox vAlign='center'>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H4>Escolha um mundo</H4>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
        <ListContent>
          {worlds.map(world => {
            return (
              <HBox>
                <HBoxSeparator />
                <HBoxItem vAlign='center'>
                  <PrimaryButton
                    text={world}
                    onClick={() => {
                      handleWorldSelection(world);
                    }}
                  />
                </HBoxItem>
                <HBoxSeparator />
              </HBox>
            );
          })}
        </ListContent>
      </BodyContent>
    </Root>
  );
};
