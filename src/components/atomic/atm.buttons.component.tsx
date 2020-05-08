import { styleguide } from 'components/styleguide';
import React from 'react';
import styled from 'styled-components';

export interface ButtonInterface {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const StyledPrimaryButton = styled.button`
  outline: 0;
  flex: 1;
  flex-direction: row;
  align-self: center;
  background-color: ${styleguide.colors.callToAction};
  color: ${styleguide.colors.white};
  font-family: ${styleguide.fonts.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${styleguide.typography.InputLabel};
  padding: ${styleguide.spacing.small};
  height: ${styleguide.sizes.buttonHeight};
  border: none;
  margin: ${styleguide.spacing.xSmall};
  /* margin: ${styleguide.spacing.small}; */
  :hover {
    cursor: pointer;
  }
`;

const StyledSecondaryButton = styled.button`
  outline: 0;
  flex: 1;
  flex-direction: row;
  align-self: center;
  background-color: ${styleguide.colors.secondary};
  color: ${styleguide.colors.white};
  font-family: ${styleguide.fonts.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${styleguide.typography.InputLabel};
  padding: ${styleguide.spacing.small};
  border: none;
  margin: ${styleguide.spacing.small};
  :hover {
    cursor: pointer;
  }
`;

const StyledGoBackButton = styled.button`
  outline: 0;
  flex: 1;
  flex-direction: row;
  align-self: center;
  background-color: ${styleguide.colors.decorative};
  color: ${styleguide.colors.white};
  font-family: ${styleguide.fonts.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${styleguide.typography.InputLabel};
  padding: ${styleguide.spacing.small};
  border: none;
  margin: ${styleguide.spacing.small};
  :hover {
    cursor: pointer;
  }
`;

const StyledCancelButton = styled.button`
  outline: 0;
  flex: 1;
  flex-direction: row;
  align-self: center;
  background-color: ${styleguide.colors.error};
  color: ${styleguide.colors.white};
  font-family: ${styleguide.fonts.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${styleguide.typography.InputLabel};
  padding: ${styleguide.spacing.small};
  border: none;
  margin: ${styleguide.spacing.small};
  :hover {
    cursor: pointer;
  }
`;

const StyledTextButton = styled.button`
  outline: 0;
  flex: 1;
  flex-direction: row;
  align-self: center;
  background-color: rgba(0,0,0,0);
  :hover {
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
  }
  color: ${styleguide.colors.white};
  font-family: ${styleguide.fonts.secondary};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${styleguide.typography.InputLabel};
  padding: ${styleguide.spacing.small};
  margin: ${styleguide.spacing.small};
`;

export const PrimaryButton: React.FC<ButtonInterface> = props => {
  return (
    <StyledPrimaryButton disabled={props.disabled} onClick={props.onClick}>
      {props.text}
    </StyledPrimaryButton>
  );
};

export const SecondaryButton: React.FC<ButtonInterface> = props => {
  return (
    <StyledSecondaryButton disabled={props.disabled} onClick={props.onClick}>
      {props.text}
    </StyledSecondaryButton>
  );
};

export const CancelButton: React.FC<ButtonInterface> = props => {
  return (
    <StyledCancelButton disabled={props.disabled} onClick={props.onClick}>
      {props.text}
    </StyledCancelButton>
  );
};

export const GoBackButton: React.FC<ButtonInterface> = props => {
  return (
    <StyledGoBackButton disabled={props.disabled} onClick={props.onClick}>
      {props.text}
    </StyledGoBackButton>
  );
};

export const TextButton: React.FC<ButtonInterface> = props => {
  return (
    <StyledTextButton disabled={props.disabled} onClick={props.onClick}>
      {props.text}
    </StyledTextButton>
  );
};
