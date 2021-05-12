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
import { createAccount, test } from 'data/account-creation.datasource';
import sha256 from 'sha256';
import { ErrorResponse } from 'data/response-types.datasource';

export interface CreateAccountPageProps {}

export const CreateAccountPage: React.FC<CreateAccountPageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [creationAccountError, setCreationAccountError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    !!context.token && history.push('/menu');
  }, []);

  const handleAccountCreationError = (error: ErrorResponse) => {
    setErrorMessage(error.message);
    setCreationAccountError(true);
  };

  const handleAccountCreationRedirect = () => {
    history.push('/check-your-email');
  };

  const handleAccountCreation = () => {
    createAccount({
      email: email,
      password: password,
      username: username,
    })
      .then(handleAccountCreationRedirect)
      .catch(handleAccountCreationError);
  };

  const cryptPassword = (rawPassword: string) => {
    setPassword(sha256(rawPassword));
  };

  const inputTypes: TextInputInterface[] = [
    {
      label: 'Nome de usuário',
      type: 'text',
      dispatcher: setUsername,
      value: username,
    },
    {
      label: 'Email',
      type: 'email',
      dispatcher: setEmail,
      value: email,
    },
    {
      label: 'Senha',
      type: 'password',
      dispatcher: cryptPassword,
      value: password,
    },
  ];

  return (
    <Root>
      <BodyContent>
        <HBox>
          <HBoxItem vAlign='center'>
            <H4>Criação de conta</H4>
          </HBoxItem>
        </HBox>

        {creationAccountError && (
          <HBox>
            <HBoxItem vAlign='center'>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </HBoxItem>
          </HBox>
        )}

        <HBox>
          <HBoxSeparator />
          <HBoxItem>
            <Forms types={inputTypes} textSubmit='Criar conta' onSubmit={handleAccountCreation} />
          </HBoxItem>
          <HBoxSeparator />
        </HBox>
      </BodyContent>
    </Root>
  );
};
