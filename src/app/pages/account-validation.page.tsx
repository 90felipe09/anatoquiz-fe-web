import { Root, HBox, HBoxItem, VSeparator, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState, useEffect } from 'react';
import { H1, Body, H4, ErrorMessage } from 'components/atomic/atm.typography.styled';
import { BodyContent } from 'components/atomic/atm.wrapper.component';
import { useParams, useHistory } from 'react-router-dom';
import { validateAccount } from 'data/account-creation.datasource';
import { ErrorResponse } from 'data/response-types.datasource';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';

export interface AccountValidationPageProps {}

export const AccountValidationPage: React.FC<AccountValidationPageProps> = props => {
  const [invalidToken, setInvalidToken] = useState<boolean>(false);
  const [accountValidated, setAccountValidated] = useState<boolean>(false);
  const history = useHistory();
  const { token } = useParams();

  const handleAccountValidated = () => {
    setAccountValidated(true);
  };

  const handleAccountValidationError = (error: ErrorResponse) => {
    setInvalidToken(true);
  };

  const requestAccountValidation = (tokenInput: string) => {
    validateAccount({
      token: tokenInput,
    })
      .then(handleAccountValidated)
      .catch(handleAccountValidationError);
  };

  useEffect(() => {
    !!token ? requestAccountValidation(token) : setInvalidToken(true);
  }, []);

  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <HBox>
          <HBoxItem hAlign='center' vAlign='center'>
            <H4>Estamos validando a sua conta...</H4>
          </HBoxItem>
        </HBox>
        {invalidToken && (
          <>
            <HBox>
              <HBoxSeparator />
              <HBoxItem hAlign='center' vAlign='center'>
                <ErrorMessage>
                  O link para validação expirou. Clique abaixo para enviarmos outro link de validação.
                </ErrorMessage>
              </HBoxItem>
              <HBoxSeparator />
            </HBox>
            <HBox>
              <HBoxSeparator />
              <HBoxItem hAlign='center' vAlign='center'>
                <PrimaryButton onClick={() => {}} text='Enviar outro link' />
              </HBoxItem>
              <HBoxSeparator />
            </HBox>
          </>
        )}
        {accountValidated && (
          <>
            <HBox>
              <HBoxSeparator />
              <HBoxItem hAlign='center' vAlign='center'>
                <H1>A sua conta foi validada com sucesso! Faça login clicando no botão abaixo!</H1>
              </HBoxItem>
              <HBoxSeparator />
            </HBox>
            <VSeparator/>
            <HBox>
              <HBoxSeparator />
              <HBoxItem hAlign='center' vAlign='center'>
                <PrimaryButton onClick={() => history.push('/login')} text='Login' />
              </HBoxItem>
              <HBoxSeparator />
            </HBox>
          </>
        )}
      </BodyContent>
    </Root>
  );
};
