import {
  QuestionCard,
  QuestionCardDataProps,
  QuestionCardKnowMoreDataProps,
  QuestionCardStatusEnum,
} from 'app/components/question-card-modules/question-cards-modules';
import { BodyContent } from 'components/atomic/atm.wrapper.component';
import { HBox, HBoxItem, Root, VSeparator } from 'components/atomic/obj.grid.components';
import { MenuOption, NavigationBar } from 'components/atomic/org.navbar.component';
import React, { useState } from 'react';
import { PrimaryButton } from '../components/atomic/atm.buttons.component';

export default {
  title: 'Question Cards',
  component: QuestionCard,
};

const requestSimulator = {
  correctAnswer: 'Fascículo Cuneiforme',
};

export const QuestionCardStory = () => {
  const [questionStatus, setQuestionStatus] = useState<QuestionCardStatusEnum>(QuestionCardStatusEnum.question);

  const handleAlternativeChoose = (answer: string) => {
    if (requestSimulator.correctAnswer === answer) {
      setQuestionStatus(QuestionCardStatusEnum.correct);
    } else {
      setQuestionStatus(QuestionCardStatusEnum.incorrect);
    }
  };

  const handleKnowMore = () => {
    setQuestionStatus(QuestionCardStatusEnum.knowMore);
  };

  const handleNextQuestion = () => {
    setQuestionStatus(QuestionCardStatusEnum.question);
  };

  return (
    <Root>
      <NavigationBar authMenuOptions={menuOptions} menuOptions={menuOptions} logo='LOGO' />
      <BodyContent>
        <HBox hAlign='center'>
          <QuestionCard
            knowMore={knowMoreMock}
            question={questionMock}
            status={questionStatus}
            onChooseAlternative={handleAlternativeChoose}
            onKnowMore={handleKnowMore}
            onNextQuestion={handleNextQuestion}
          />
        </HBox>
      </BodyContent>
    </Root>
  );
};

const LoginContentOption = () => {
  return (
    <Root bgColor={true}>
      <VSeparator />
      <HBox>
        <HBoxItem>
          <PrimaryButton text='f' onClick={() => {}} />
        </HBoxItem>
        <HBoxItem>
          <PrimaryButton text='f' onClick={() => {}} />
        </HBoxItem>
      </HBox>
      <VSeparator />
    </Root>
  );
};

const menuOptions: MenuOption[] = [
  {
    optionName: 'Login',
    onClick: () => {},
    expandable: true,
    content: <LoginContentOption />,
  },
  {
    optionName: '123',
    onClick: () => console.log(123),
  },
  {
    optionName: '123',
    onClick: () => console.log(123),
  },
];

const knowMoreMock: QuestionCardKnowMoreDataProps = {
  bibliografia: [
    `GUSMÃO, Sebastião Silva; CAMPOS, Gilberto Belisário; TEIXEIRA, Antônio Lúcio. Exame neurológico: bases anatomofuncionais. 2. ed. Rio de Janeiro, RJ: Revinter, 2007. 353 p. ISBN 8537201015`,
    `KEITH L. MOORE, ARTHUR F. DALLEY, ANNE M. R. AGUR - Anatomia Orientada Para A Clínica - 7ª Ed. 2014 - Guanabara Koogan`,
  ],
  saibaMais: `Está apontado o Fascículo Cuneiforme, que faz parte do funículo posterior. Este por sua vez é composto do Fascículo grácil (medial) e cuneiforme (lateral) e são responsáveis por transmitir informação do tato discriminativo, propriocepção consciente e sensibilidade vibratória.`,
};

const questionMock: QuestionCardDataProps = {
  alternativas: {
    A: `Corno posterior da subst. cinzenta`,
    B: `Fascículo Cuneiforme`,
    C: `Trato espinocerebelar anterior`,
    D: `Fascículo grácil`,
  },
  enunciado: `Paciente com neoplasia compressiva medular apresenta déficit de tato discriminativo, propriocepção consciente e sensibilidade vibratória, foi observado que há lesão nessa estrutura a seguir, quem é ela?`,
  imagem: `https://media.milanote.com/p/images/1Jl9931pFwR14z/lFR/Screen+Shot+2020-04-05+at+2.33.12+PM.png`,
};
