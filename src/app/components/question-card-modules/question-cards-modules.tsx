import styled from 'styled-components';
import { styleguide } from 'components/styleguide';
import React from 'react';
import { HBox, VSeparator, VBox, HBoxItem } from 'components/atomic/obj.grid.components';
import { Body, H1 } from 'components/atomic/atm.typography.styled';
import { PrimaryButton, SecondaryButton, TextButton } from 'components/atomic/atm.buttons.component';
import { StyledImage } from 'components/atomic/atm.image.component';
import { ScrollableContent } from 'components/atomic/atm.wrapper.component';
import { DLStyled, DT, DD } from 'components/atomic/atm.definition-list.component';
import CorrectIcon from 'assets/icon/Correct.png';
import IncorrectIcon from 'assets/icon/Incorrect.png';
import { StyledFeedbackIcon, StyledFeedbackIconContainer } from 'components/atomic/atm.icon.components';

// Styled
const StyledQuestionCard = styled.span`
  border: ${(props: StyledFeedbackCardProps) =>
    props.status === QuestionCardStatusEnum.correct || props.status === QuestionCardStatusEnum.incorrect
      ? 'none'
      : 'solid'};
  border-width: ${styleguide.spacing.xSmall};
  border-color: ${styleguide.colors.primary};
  width: ${styleguide.sizes.questionCardWidth};
  padding: ${styleguide.spacing.medium};
  display: flex;
  background-color: ${(props: StyledFeedbackCardProps) => {
    if (props.status === QuestionCardStatusEnum.correct) {
      return styleguide.colors.success;
    } else if (props.status === QuestionCardStatusEnum.incorrect) {
      return styleguide.colors.error;
    } else {
      return styleguide.colors.white;
    }
  }};
`;

export interface QuestionCardProps {
  status: QuestionCardStatusEnum;
  question: QuestionCardDataProps;
  knowMore: QuestionCardKnowMoreDataProps;
  onChooseAlternative: (answer: string) => void;
  onKnowMore: () => void;
  onNextQuestion: () => void;
}

export interface QuestionCardContentProps {
  enunciado: string;
  alternativas: AlternativesInterface;
  imagem: string;
  onChooseAlternative: (answer: string) => void;
}

export interface QuestionCardDataProps {
  enunciado: string;
  alternativas: AlternativesInterface;
  imagem: string;
}

export interface AlternativesInterface {
  [key: string]: string;
}

export interface QuestionCardKnowMoreProps {
  saibaMais: string;
  bibliografia: string[];
  onNextQuestion: () => void;
}

export interface QuestionCardKnowMoreDataProps {
  saibaMais: string;
  bibliografia: string[];
}

export enum QuestionCardStatusEnum {
  question = 'question',
  correct = 'correct',
  incorrect = 'incorrect',
  knowMore = 'knowMore',
}
// container
export const QuestionCard: React.FC<QuestionCardProps> = props => {
  return (
    <StyledQuestionCard status={props.status}>
      {props.status === QuestionCardStatusEnum.question && (
        <QuestionCardContent
          alternativas={props.question.alternativas}
          enunciado={props.question.enunciado}
          imagem={props.question.imagem}
          onChooseAlternative={props.onChooseAlternative}
        />
      )}
      {(props.status === QuestionCardStatusEnum.correct || props.status === QuestionCardStatusEnum.incorrect) && (
        <QuestionCardCorrectFeedback onKnowMoreTap={props.onKnowMore} status={props.status} />
      )}
      {props.status === QuestionCardStatusEnum.knowMore && (
        <QuestionCardKnowMore
          onNextQuestion={props.onNextQuestion}
          bibliografia={props.knowMore.bibliografia}
          saibaMais={props.knowMore.saibaMais}
        />
      )}
    </StyledQuestionCard>
  );
};

// Component
const QuestionCardContent: React.FC<QuestionCardContentProps> = props => {
  const Alternatives = Object.values(props.alternativas).map(alternative => {
    const handleClick = () => {
      props.onChooseAlternative(alternative);
    };
    return (
      <HBox>
        <PrimaryButton text={alternative} onClick={handleClick} />
      </HBox>
    );
  });

  return (
    <VBox>
      <ScrollableContent>
        <HBox>
          <Body>{props.enunciado}</Body>
        </HBox>
        <VSeparator />
        {!!props.imagem && (
          <HBox>
            <StyledImage src={props.imagem} />
          </HBox>
        )}
      </ScrollableContent>
      <VSeparator />
      {Alternatives}
    </VBox>
  );
};

interface StyledFeedbackCardProps {
  status: QuestionCardStatusEnum;
}

const StyledFeedbackCard = styled.span`
  background-color: ${(props: StyledFeedbackCardProps) =>
    props.status === QuestionCardStatusEnum.correct ? styleguide.colors.success : styleguide.colors.error};
  width: 100%;
  height: 100%;
`;

interface FeedbackCardprops {
  status: QuestionCardStatusEnum;
  onKnowMoreTap: () => void;
}

const QuestionCardCorrectFeedback: React.FC<FeedbackCardprops> = props => {
  const icon = props.status === QuestionCardStatusEnum.correct ? CorrectIcon : IncorrectIcon;
  return (
    <StyledFeedbackCard status={props.status}>
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <HBox hAlign='center'>
        <HBoxItem hAlign='center' vAlign='center'>
          <StyledFeedbackIconContainer>
            <HBox hAlign='center' vAlign='center'>
              <StyledFeedbackIcon source={icon} />
            </HBox>
          </StyledFeedbackIconContainer>
        </HBoxItem>
      </HBox>
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <VSeparator />
      <HBox hAlign='flex-end'>
        <HBoxItem wrap={true} vAlign='flex-end' hAlign='flex-end'>
          <TextButton text={'Saiba mais'} onClick={props.onKnowMoreTap} />
        </HBoxItem>
      </HBox>
    </StyledFeedbackCard>
  );
};

const QuestionCardKnowMore: React.FC<QuestionCardKnowMoreProps> = props => {
  const bibliografia = props.bibliografia.map(element => <DD>{element}</DD>);
  return (
    <VBox>
      <ScrollableContent>
        <HBox>
          <Body>{props.saibaMais}</Body>
        </HBox>
      </ScrollableContent>
      <HBox>
        <DLStyled inline={false}>
          <DT>bibliografia</DT>
          {bibliografia}
        </DLStyled>
      </HBox>
      <HBox>
        <PrimaryButton text={'Próxima'} onClick={props.onNextQuestion} />
      </HBox>
    </VBox>
  );
};
