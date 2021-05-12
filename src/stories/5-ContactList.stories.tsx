import React from 'react';
import { ProfileHeader } from '../components/atomic/org.profile-header.component';
import { Root, VBox, VSeparator } from '../components/atomic/obj.grid.components';
import { ContactCard } from 'components/atomic/mol.contact-card.component';
import Avatar from 'assets/mock/Avatar.png';
import { ScrollableContent } from 'components/atomic/atm.wrapper.component';

export default {
  title: 'Contact List',
  component: ContactCard,
};

export const ProfileHeaderStory = () => {
  const mockFunction = () => {
    alert('clicked');
  };
  return (
    <Root>
      <ScrollableContent>
        <ContactCard avatarPhoto={Avatar} contactDescription={['Ranking: 1º']} contactName={'Bruno Rosa'} id={'1'}/>
        <ContactCard avatarPhoto={Avatar} contactDescription={['Ranking: 1º']} contactName={'Bruno Rosa'} id={'2'}/>
        <ContactCard avatarPhoto={Avatar} contactDescription={['Ranking: 1º']} contactName={'Bruno Rosa'} id={'3'}/>
      </ScrollableContent>
    </Root>
  );
};
