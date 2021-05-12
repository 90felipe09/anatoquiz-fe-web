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
import { H2, H1, H3, H4, ErrorMessage } from 'components/atomic/atm.typography.styled';
import { StyledImage } from 'components/atomic/atm.image.component';
import Handshake from 'assets/images/handshake.jpg';
import Idea from 'assets/images/idea.jpg';
import { styleguide } from 'components/styleguide';
import { GlobalState } from 'app/components/global-state/global-state.provider';
import { LoginContentOption } from 'app/components/menu-options/menu-options';
import { Forms } from 'components/atomic/org.forms.component';
import { TextInputInterface } from 'components/atomic/mol.forms-input.component';
import { requestPasswordRecovery } from 'data/password-recovery.datasource';

export interface ForgotPasswordPageProps {}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);
  const [email, setEmail] = useState<string>('');
  const [requestFailed, setRequestFailed] = useState<boolean>(false);

  useEffect(() => {
    !!context.token && history.push('/menu');
  }, []);
  const inputTypes: TextInputInterface[] = [
    {
      label: 'Email',
      type: 'email',
      dispatcher: setEmail,
      value: email,
    },
  ];

  const handleRequestSuccessful = () => {
    history.push('/how-to-recover-password');
  };

  const handleRequestFailed = () => {
    setRequestFailed(true);
  };

  const handleSendEmail = () => {
    requestPasswordRecovery({
      email,
    })
      .then(handleRequestSuccessful)
      .catch(handleRequestFailed);
  };

  return (
    <Root>
      <BodyContent>
        <HBox>
          <HBoxItem vAlign='center'>
            <H4>Recuperação de senha</H4>
          </HBoxItem>
        </HBox>
        {requestFailed && (
          <HBox>
            <HBoxItem vAlign='center'>
              <ErrorMessage>Não existe conta associada à este email</ErrorMessage>
            </HBoxItem>
          </HBox>
        )}
        <HBox>
          <HBoxItem vAlign='center'>
            <H1>Insira o email da conta que você quer redefinir a senha</H1>
          </HBoxItem>
        </HBox>
        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <Forms textSubmit='Enviar email' onSubmit={handleSendEmail} types={inputTypes} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
