import React from 'react';
import { ProfileHeader } from '../components/atomic/org.profile-header.component';
import { Root, VBox, VSeparator, HBoxItem, HBox } from '../components/atomic/obj.grid.components';
import { ContactCard } from 'components/atomic/mol.contact-card.component';
import Avatar from 'assets/mock/Avatar.png';
import { ScrollableContent } from 'components/atomic/atm.wrapper.component';
import {
  ProgressCircle,
  ProgressStatusEnum,
  LevelCard,
  ChallengeCard,
} from 'app/components/level/progress-circle.component';

export default {
  title: 'Level Progress',
  component: ProgressCircle,
};

export const ProfileHeaderStory = () => {
  const mockFunction = () => {
    alert('clicked');
  };
  return (
    <Root>
      <ScrollableContent>
        <ChallengeCard status={ProgressStatusEnum.challenge} />
        <LevelCard fase={'1'} mundo={'1'} status={ProgressStatusEnum.blocked} tema={'Anatomia'} />
        <VSeparator />
        <LevelCard fase={'2'} mundo={'1'} status={ProgressStatusEnum.blocked} tema={'Anatomia'} />
        <VSeparator />
        <LevelCard fase={'3'} mundo={'1'} status={ProgressStatusEnum.blocked} tema={'Anatomia'} />
        <VSeparator />
        <LevelCard fase={'4'} mundo={'1'} status={ProgressStatusEnum.blocked} tema={'Anatomia'} />
        <VSeparator />
        <LevelCard fase={'5'} mundo={'1'} status={ProgressStatusEnum.new} tema={'Anatomia'} />
        <VSeparator />
        <LevelCard fase={'6'} mundo={'1'} status={ProgressStatusEnum.cleared} tema={'Anatomia'} />
      </ScrollableContent>
    </Root>
  );
};
