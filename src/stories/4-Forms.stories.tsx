import React, { useState } from 'react';
import { Root } from 'components/atomic/obj.grid.components';
import { TextFormInput, TextInputInterface } from 'components/atomic/mol.forms-input.component';
import { Forms } from 'components/atomic/org.forms.component';

export default {
  title: 'Input Forms',
  component: TextFormInput,
};

export const TextFormsStory = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const InputForms: TextInputInterface[] = [
    {
      label: 'Paciente',
      type: 'Text',
      dispatcher: setName,
      value: name,
    },
    {
      label: 'Senha',
      type: 'password',
      dispatcher: setPassword,
      value: password,
    },
    {
      label: 'Email',
      type: 'email',
      dispatcher: setEmail,
      value: email,
    },
    {
      label: 'Telefone',
      type: 'tel',
      dispatcher: setTel,
      value: tel,
    },
  ];

  return (
    <Root>
      <Forms textSubmit='Marcar' onSubmit={() => alert(name + password + email + tel)} types={InputForms}></Forms>
    </Root>
  );
};
