import React from 'react';
import { PrimaryButton } from './atm.buttons.component';
import { TextFormInput, TextInputInterface } from './mol.forms-input.component';
import { HBox, HBoxItem, Root } from './obj.grid.components';
import sha256 from 'sha256';

export interface FormsInterface {
  types: TextInputInterface[];
  onSubmit: () => void;
  textSubmit: string;
}

export interface FormsContextInterface {
  values: KeyValue | undefined;
  valuesDispatcher: any;
}

interface KeyValue {
  [key: string]: string;
}

export const FormsContext = React.createContext<FormsContextInterface>({
  values: {},
  valuesDispatcher: null,
});

export const Forms: React.FC<FormsInterface> = props => {
  const listInputForms = props.types.map(type => (
    <HBox>
      <HBoxItem>
        <TextFormInput type={type.type} label={type.label} value={type.value} dispatcher={type.dispatcher} forgot={type.forgot}/>
      </HBoxItem>
    </HBox>
  ));

  const handleSubmit = () => {
    props.onSubmit();
  };

  return (
    <Root>
      {listInputForms}
      <HBoxItem>
        <PrimaryButton text={props.textSubmit} onClick={handleSubmit} />
      </HBoxItem>
    </Root>
  );
};
