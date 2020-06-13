import styled from 'styled-components';
import { styleguide } from 'components/styleguide';
import React from 'react';
import { HBox, HBoxItem, VBox, VSeparator, HBoxSeparator } from 'components/atomic/obj.grid.components';
import { H2, Body } from 'components/atomic/atm.typography.styled';
import { StyledLineSeparator, StyledLevelLine } from 'components/atomic/atm.line-decorator.component';

export const StyledProgressCircle = styled.span`
  width: ${styleguide.sizes.progressFrame};
  height: ${styleguide.sizes.progressFrame};
  border-radius: 50%;
  border-width: ${styleguide.spacing.xSmall};
  border-color: ${styleguide.colors.black};
  border: solid;
  z-index: 1;
  :hover{
      cursor: pointer;
  }
`;

export enum ProgressStatusEnum {
  new = 'new',
  cleared = 'cleared',
  challenge = 'challenge',
  blocked = 'blocked',
}

export interface ProgressStatusProps {
  status: string;
}

export const StyledProgressStatus = styled.span`
  width: ${styleguide.sizes.progressStatus};
  height: ${styleguide.sizes.progressStatus};
  margin: ${styleguide.spacing.small};
  z-index: 2;
  display: flex;
  border-radius: 50%;
  background-color: ${(props: ProgressStatusProps) => {
    switch (props.status) {
      case ProgressStatusEnum.blocked:
        return styleguide.colors.lightGray;
        break;
      case ProgressStatusEnum.new:
        return styleguide.colors.primary;
        break;
      case ProgressStatusEnum.cleared:
        return styleguide.colors.success;
        break;
      case ProgressStatusEnum.challenge:
        return styleguide.colors.error;
        break;
      default:
        return styleguide.colors.error;
        break;
    }
  }};
`;

export interface ProgressCircleProps {
  status: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = props => {
  return (
    <StyledProgressCircle>
      <StyledProgressStatus status={props.status} />
    </StyledProgressCircle>
  );
};

export interface LevelCardProps {
  status: string;
  mundo: string;
  fase: string;
  tema: string;
  onClick?: () => void;
}



export const LevelCard: React.FC<LevelCardProps> = props => {
    return (
    <HBox vAlign='center'>
        <HBoxSeparator/>
      <HBoxItem wrap={true} onClick={props.onClick}>
        <ProgressCircle status={props.status} />
      </HBoxItem>
      <HBoxItem>
        <VBox>
          <Body>{`Mundo ${props.mundo} - Fase ${props.fase}`}</Body>
          <StyledLevelLine />
          <Body>{props.tema}</Body>
        </VBox>
      </HBoxItem>
      <HBoxSeparator/>
    </HBox>
  );
};

export interface ChallengeCardProps {
    status: string;
    onClick?: () => void;
  }

export const ChallengeCard: React.FC<ChallengeCardProps> = props => {
  return (
    <HBox vAlign='center'>
      <HBoxItem>
        <VBox>
          <HBox>
            <HBoxItem>
              <HBoxSeparator />
            </HBoxItem>
            <HBoxItem wrap={true}>
              <Body>{'Desafio'}</Body>
            </HBoxItem>
            <HBoxItem>
              <HBoxSeparator />
            </HBoxItem>
          </HBox>
          <StyledLevelLine />
          <HBox>
            <HBoxItem>
              <Body> </Body>
            </HBoxItem>
          </HBox>
          <VSeparator />
        </VBox>
      </HBoxItem>
      <HBoxItem wrap={true} onClick={props.onClick}>
        <ProgressCircle status={props.status} />
      </HBoxItem>
      <HBoxItem>
        <VBox>
          <HBox>
            <HBoxItem>
              <HBoxSeparator />
            </HBoxItem>
            <HBoxItem wrap={true}>
              <Body>{'Diagnóstico'}</Body>
            </HBoxItem>
            <HBoxItem>
              <HBoxSeparator />
            </HBoxItem>
          </HBox>
          <StyledLevelLine />
          <HBox>
            <HBoxItem>
              <Body> </Body>
            </HBoxItem>
          </HBox>
          <VSeparator />
        </VBox>
      </HBoxItem>
    </HBox>
  );
};
