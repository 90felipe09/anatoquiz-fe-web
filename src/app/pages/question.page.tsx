import { Root, HBox, VSeparator, HBoxItem } from 'components/atomic/obj.grid.components';
import React, { useState, useEffect } from 'react';
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

const requestSimulator = {
  correctAnswer: 'Fascículo Cuneiforme',
};

const getQuestions = async () => {
  //const [sessionId, sessionToken] = startRoundSession(token, RoundType, RoundData);
  // const questions = getQuestions(sessionId, sessionToken, token)
  return questionPacketMock;
};

const assertQuestion = async (
  sessionId: string,
  sessionToken: string,
  token: string,
  questionId: string,
  alternative: string,
) => {
  // const correctAlternative = assertQuestion(sessionId, sessionToken,token, questionId, alternative)
  const correctAlternative = requestSimulator.correctAnswer;
  return correctAlternative;
};

export interface QuestionPageProps {}

export const QuestionPage: React.FC<QuestionPageProps> = props => {
  const [questionStatus, setQuestionStatus] = useState<QuestionCardStatusEnum>(QuestionCardStatusEnum.question);
  const [sessionInitialized, setSessionInitialized] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionPacketInterface>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAlternative, setCorrectAlternative] = useState<string>();

  const history = useHistory();

  const handleAlternativeChoose = (answer: string) => {
    assertQuestion('', '', '', '', '').then(result => {
      setCorrectAlternative(result);
      if (correctAlternative === answer) {
        setQuestionStatus(QuestionCardStatusEnum.correct);
      } else {
        setQuestionStatus(QuestionCardStatusEnum.incorrect);
      }
    });
  };

  const handleKnowMore = () => {
    setQuestionStatus(QuestionCardStatusEnum.knowMore);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    questions && currentQuestionIndex + 1 >= questions.questionsPacket.length && history.push('/done');
    setQuestionStatus(QuestionCardStatusEnum.question);
  };

  useEffect(() => {
    getQuestions().then(setQuestions);
    setSessionInitialized(true);
    console.log('Effect');
  }, []);

  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <VSeparator />
        <HBox hAlign='center'>
          <QuestionCard
            knowMore={questions?.knowMorePacket?.[currentQuestionIndex]}
            question={questions?.questionsPacket?.[currentQuestionIndex]}
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

interface QuestionPacketInterface {
  knowMorePacket: QuestionCardKnowMoreDataProps[];
  questionsPacket: QuestionCardDataProps[];
}

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
  imagem: `https://anatoquiz-images.s3.us-east-2.amazonaws.com/seta+para+fasci%CC%81culo+cuneiforme+medula+corte+tranversal+sem+nu%CC%81meros+retirado+do+semio+neuro+do+Gusma%CC%83o.png`,
};

const questionPacketMock: QuestionPacketInterface = {
  knowMorePacket: [knowMoreMock, knowMoreMock, knowMoreMock],
  questionsPacket: [questionMock, questionMock, questionMock],
};
