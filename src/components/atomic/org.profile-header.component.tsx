import { styleguide } from 'components/styleguide';
import React from 'react';
import styled from 'styled-components';
import { CancelButton, PrimaryButton, SecondaryButton } from './atm.buttons.component';
import { StyledHeaderSeparator } from './atm.line-decorator.component';
import { Body, H1 } from './atm.typography.styled';
import { HBox, HBoxItem, HBoxSeparator, VBox } from './obj.grid.components';

export interface StyledImageProfileInterface {
  source: string;
}

export const StyledImageProfile = styled.image`
  border-radius: 50%;
  background-image: url(${(props: StyledImageProfileInterface) => props.source});
  padding: ${styleguide.spacing.medium};
  background-repeat: no-repeat;
  height: ${styleguide.sizes.profilePhoto};
  width: ${styleguide.sizes.profilePhoto};
`;

export interface ProfileHeaderInterface {
  name: string;
  mode: 'medico' | 'paciente';
  definingAvailability: boolean;
  profilePicture: string;
  onDefineClick: () => void;
  onSubmitClick: () => void;
  onCancelClick: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderInterface> = props => {
  return (
    <HBox>
      <HBoxSeparator />
      <HBoxItem wrap={true} hAlign='center' vAlign='center'>
        <StyledImageProfile source={props.profilePicture} />
      </HBoxItem>
      <HBoxItem>
        <VBox>
          <VBox>
            <HBoxItem vAlign='center'>
              <H1>{props.name}</H1>
              <HBoxSeparator />
            </HBoxItem>
          </VBox>
          <StyledHeaderSeparator />
          <VBox>
            {props.mode === 'medico' ? (
              <>
                {props.definingAvailability ? (
                  <>
                    <HBoxItem>
                      <HBoxSeparator />
                      <CancelButton onClick={props.onCancelClick} text='Cancelar' />
                      <PrimaryButton onClick={props.onSubmitClick} text='Definir' />
                      <HBoxSeparator />
                    </HBoxItem>
                  </>
                ) : (
                  <>
                    <HBoxSeparator />
                    <SecondaryButton onClick={props.onDefineClick} text='Definir Disponibilidades' />
                    <HBoxSeparator />
                  </>
                )}
              </>
            ) : (
              <HBoxItem vAlign='center'>
                <Body>Escolha um horário para marcar uma consulta</Body>
              </HBoxItem>
            )}
            <HBoxSeparator />
          </VBox>
        </VBox>
      </HBoxItem>
    </HBox>
  );
};
