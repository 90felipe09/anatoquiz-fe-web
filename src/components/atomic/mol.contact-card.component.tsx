import styled from 'styled-components';
import { Body, H4, H3 } from './atm.typography.styled';
import React from 'react';
import { HBox, HBoxItem, HBoxSeparator, VSeparator, Root } from './obj.grid.components';
import { DD, DLStyled, DT } from './atm.definition-list.component';
import { StyledImage } from './atm.image.component';
import { styleguide } from 'components/styleguide';
import { StyledLineDecorator } from './atm.line-decorator.component';

const StyledContactCard = styled.span`
  width: 100%;
  padding: ${styleguide.spacing.xSmall};
  :hover{
    cursor: pointer;
  }
`;

const StyledBorder = styled.span`
  width: 100%;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export interface ContactCardProps {
  avatarPhoto: string;
  contactName: string;
  contactDescription: string[];
  id: string;
  onClick?: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = props => {
  return (
    <StyledContactCard onClick={props.onClick}>
      <HBox>
        <StyledBorder>
          <HBox>
            <HBoxSeparator />
            <HBoxItem wrap={true}>
              <StyledImage src={props.avatarPhoto} width={styleguide.sizes.contactPhoto} />
            </HBoxItem>
            <HBoxSeparator />
            <HBoxItem>
              <VSeparator />
              <DLStyled inline={false}>
                <DT>{props.contactName}</DT>
                {props.contactDescription.map(description => (
                  <DD>{description}</DD>
                ))}
              </DLStyled>
            </HBoxItem>
          </HBox>
        </StyledBorder>
      </HBox>
    </StyledContactCard>
  );
};
