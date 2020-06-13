import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState } from 'react';
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
import { H2, H1, H3 } from 'components/atomic/atm.typography.styled';
import { CoinsBar } from 'components/atomic/mol.coins-bar.component';
import { StyledImage } from 'components/atomic/atm.image.component';
import Avatar from 'assets/mock/Avatar.png';
import { styleguide } from 'components/styleguide';
import {
  ChallengeCard,
  ProgressStatusEnum,
  LevelCardProps,
  LevelCard,
} from 'app/components/level/progress-circle.component';

export interface LevelSelectionPageProps {}

export const LevelSelectionPage: React.FC<LevelSelectionPageProps> = props => {
  const history = useHistory();

  const levels: LevelCardProps[] = [
    { status: ProgressStatusEnum.blocked, tema: 'Anatomia', mundo: 'Cardiovascular', fase: '6' },
    { status: ProgressStatusEnum.blocked, tema: 'Radiologia', mundo: 'Cardiovascular', fase: '5' },
    { status: ProgressStatusEnum.blocked, tema: 'Anatomia', mundo: 'Cardiovascular', fase: '4' },
    { status: ProgressStatusEnum.blocked, tema: 'Radiologia', mundo: 'Cardiovascular', fase: '3' },
    { status: ProgressStatusEnum.new, tema: 'Anatomia', mundo: 'Cardiovascular', fase: '2' },
    { status: ProgressStatusEnum.cleared, tema: 'Anatomia', mundo: 'Cardiovascular', fase: '1' },
  ];

  const challenge: string = 'Cardiovascular';

  const handleLevelSelection = (level: LevelCardProps) => {
    history.push('/countdown');
  };

  const handleChallengeSelection = (challengeWorld: string) => {
    history.push('/challenge');
  };

  return (
    <Root>
      <BodyContent>
        <HBox>
          <HBoxSeparator />
          <ChallengeCard status={ProgressStatusEnum.challenge} onClick={() => handleChallengeSelection(challenge)} />
          <HBoxSeparator />
        </HBox>

        <ListContent>
          {levels.map(level => (
            <LevelCard
              status={level.status}
              tema={level.tema}
              mundo={level.mundo}
              fase={level.fase}
              onClick={() => handleLevelSelection(level)}
            />
          ))}
        </ListContent>
      </BodyContent>
    </Root>
  );
};
