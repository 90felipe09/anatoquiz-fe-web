import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState } from 'react';
import { NavigationBar, MenuOption } from 'components/atomic/org.navbar.component';
import { BodyContent, ScrollableContent, ListContent } from 'components/atomic/atm.wrapper.component';
import {
  QuestionCard,
  QuestionCardStatusEnum,
  QuestionCardKnowMoreDataProps,
  QuestionCardDataProps,
} from 'app/components/question-card-modules/question-cards-modules';
import { PrimaryButton } from 'components/atomic/atm.buttons.component';
import { useHistory } from 'react-router';
import { H2, H1, H3, H4 } from 'components/atomic/atm.typography.styled';
import { CoinsBar } from 'components/atomic/mol.coins-bar.component';
import { StyledImage } from 'components/atomic/atm.image.component';
import Avatar from 'assets/mock/Avatar.png';
import { styleguide } from 'components/styleguide';
import { ContactCardProps, ContactCard } from 'components/atomic/mol.contact-card.component';

export interface AmigosPageProps {}

const contacts: ContactCardProps[] = [
  {
    avatarPhoto: Avatar,
    contactDescription: ['1º ranking'],
    contactName: 'Bruno Rosa',
    id: '1',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['2º ranking'],
    contactName: 'Felipe Kenzo',
    id: '2',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['3º ranking'],
    contactName: 'Mariana Alencar',
    id: '3',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['4º ranking'],
    contactName: 'Bruno Rosa',
    id: '4',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['5º ranking'],
    contactName: 'Bruno Rosa',
    id: '5',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['6º ranking'],
    contactName: 'Bruno Rosa',
    id: '6',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['6º ranking'],
    contactName: 'Bruno Rosa',
    id: '7',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['5º ranking'],
    contactName: 'Bruno Rosa',
    id: '8',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['6º ranking'],
    contactName: 'Bruno Rosa',
    id: '9',
  },
  {
    avatarPhoto: Avatar,
    contactDescription: ['6º ranking'],
    contactName: 'Bruno Rosa',
    id: '10',
  },
];

export const AmigosPage: React.FC<AmigosPageProps> = props => {
  const history = useHistory();

  const handleFriendSelection = (id: string) => {
    history.push('/category');
  };

  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <CoinsBar coinsAmount={90} />
        <VSeparator />
        <VSeparator />

        <HBox>
          <HBoxSeparator />
          <HBoxItem vAlign='center'>
            <H4>Amigos</H4>
          </HBoxItem>
          <HBoxSeparator />
        </HBox>

        <ListContent>
          {contacts.map(contact => (
            <ContactCard
              avatarPhoto={contact.avatarPhoto}
              contactDescription={contact.contactDescription}
              contactName={contact.contactName}
              id={contact.id}
              onClick={() => handleFriendSelection(contact.id)}
            />
          ))}
        </ListContent>
      </BodyContent>
    </Root>
  );
};
