import { styleguide } from 'components/styleguide';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledLineDecorator } from './atm.line-decorator.component';
import { Label } from './atm.typography.styled';
import { HBox, HBoxItem, VBox } from './obj.grid.components';
export interface FormInputInterface {
  type: string;
  dispatcher: (value: string) => void;
  value: string;
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

  const handleChange = (input: string) => {
    setValue(input);
    props.dispatcher(input);
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
          </VBox>
        </HBoxItem>
      </HBox>
    </>
  );
};
