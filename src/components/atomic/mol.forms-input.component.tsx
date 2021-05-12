import { styleguide } from 'components/styleguide';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledLineDecorator } from './atm.line-decorator.component';
import { Label, LinkText } from './atm.typography.styled';
import { HBox, HBoxItem, VBox } from './obj.grid.components';
import { useHistory } from 'react-router-dom';


export interface FormInputInterface {
  type: string;
  dispatcher: (value: string) => void;
  value: string;
  forgot?: boolean;
}

export interface TextInputInterface extends FormInputInterface {
  label: string;
}

const StyledInputText = styled.input`
  flex: 1;
  height: ${styleguide.typography.InputValue};
  border: none;
  border-bottom: 1px solid;
  padding: ${styleguide.spacing.small};
  border-color: ${styleguide.colors.gray};
`;

export const TextFormInput: React.FC<TextInputInterface> = props => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleChange = (input: string) => {
    setValue(input);
    props.dispatcher(input);
  };

  const handleForgotPassword = () => {
    history.push('/forgot-password');
  };

  return (
    <>
      <HBox>
        <HBoxItem>
          <VBox>
            <HBoxItem wrap={true}>
              <Label>{props.label}</Label>
            </HBoxItem>
            <HBoxItem>
              <StyledLineDecorator />
            </HBoxItem>
            <HBoxItem>
              <StyledInputText type={props.type} value={value} onChange={event => handleChange(event.target.value)} />
            </HBoxItem>
            {props.type === 'password' && !!props.forgot && (
              <HBoxItem>
                <LinkText onClick={handleForgotPassword}>Esqueci a minha senha</LinkText>
              </HBoxItem>
            )}
          </VBox>
        </HBoxItem>
      </HBox>
    </>
  );
};
