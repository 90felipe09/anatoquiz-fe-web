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
import { useHistory, useParams } from 'react-router';
import { H2, H1, H3, H4, ErrorMessage } from 'components/atomic/atm.typography.styled';
import { StyledImage } from 'components/atomic/atm.image.component';
import Handshake from 'assets/images/handshake.jpg';
import Idea from 'assets/images/idea.jpg';
import { styleguide } from 'components/styleguide';
import { GlobalState } from 'app/components/global-state/global-state.provider';
import { LoginContentOption } from 'app/components/menu-options/menu-options';
import { Forms } from 'components/atomic/org.forms.component';
import { TextInputInterface } from 'components/atomic/mol.forms-input.component';
import { changePassword } from 'data/password-recovery.datasource';
import sha256 from 'sha256';

export interface PasswordRedefinitionPageProps {}

export const PasswordRedefinitionPage: React.FC<PasswordRedefinitionPageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);
  const [password, setPassword] = useState<string>('');
  const [redefinitionFailed, setRedefinitionFailure] = useState<boolean>(false);
  const [redefinitionSucessful, setRedefinitionSuccessful] = useState<boolean>(false);

  const { token } = useParams();

  useEffect(() => {
    !!context.token && history.push('/menu');
  }, []);

  const cryptPassword = (rawPassword: string) => {
    setPassword(sha256(rawPassword));
  };

  const inputTypes: TextInputInterface[] = [
    {
      label: 'Nova senha',
      type: 'password',
      dispatcher: cryptPassword,
      value: password,
    },
  ];

  const handleSuccessfulRecovery = () => {
    setRedefinitionSuccessful(true);
  };

  const handleRecoveryError = () => {
    setRedefinitionFailure(true);
  };

  const handlePasswordRedefine = () => {
    !!token &&
      changePassword({
        newPassword: password,
        token: token,
      })
        .then(handleSuccessfulRecovery)
        .catch(handleRecoveryError);
  };

  return (
    <Root>
      <BodyContent>
        <HBox>
          <HBoxItem vAlign='center'>
            <H4>Redefinição de senha</H4>
          </HBoxItem>
        </HBox>
        {redefinitionSucessful && (
          <>
            <HBox>
              <HBoxItem vAlign='center'>
                <H1>Senha alterada com sucesso! Prossiga para o login.</H1>
              </HBoxItem>
            </HBox>
            <VSeparator/>
            <HBox>
              <HBoxItem vAlign='center'>
                <PrimaryButton onClick={()=>history.push('/login')} text='Login'/>
              </HBoxItem>
            </HBox>
          </>
        )}
        {redefinitionFailed && (
          <HBox>
            <HBoxItem vAlign='center'>
              <ErrorMessage>Este link de redefinição de senha expirou</ErrorMessage>
            </HBoxItem>
          </HBox>
        )}
        {!redefinitionFailed && !redefinitionSucessful && (
          <HBox>
            <HBoxSeparator />
            <HBoxItem vAlign='center'>
              <Forms textSubmit='Redefinir senha' onSubmit={handlePasswordRedefine} types={inputTypes} />
            </HBoxItem>
            <HBoxSeparator />
          </HBox>
        )}
      </BodyContent>
    </Root>
  );
};
