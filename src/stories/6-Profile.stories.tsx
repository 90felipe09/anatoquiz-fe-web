import React from 'react';
import { ProfileHeader } from '../components/atomic/org.profile-header.component';
import { Root, VBox, VSeparator } from '../components/atomic/obj.grid.components';

export default {
  title: 'Profile',
  component: ProfileHeader,
};

export const ProfileHeaderStory = () => {
  const mockFunction = () => {
    alert('clicked');
  };
  return (
    <Root>
      <VBox>
        <ProfileHeader
          profilePicture='https://media.milanote.com/p/images/1JizMx1OFJ8ber/B2O/doutor.jpg'
          mode='medico'
          name='Dr. Áuzio Varella'
          onDefineClick={mockFunction}
          onCancelClick={mockFunction}
          onSubmitClick={mockFunction}
          definingAvailability={false}
        />
        <VSeparator />
        <ProfileHeader
          profilePicture='https://media.milanote.com/p/images/1JizMx1OFJ8ber/B2O/doutor.jpg'
          mode='paciente'
          name='Dr. Áuzio Varella'
          onDefineClick={mockFunction}
          onCancelClick={mockFunction}
          onSubmitClick={mockFunction}
          definingAvailability={false}
        />
        <VSeparator />
        <ProfileHeader
          profilePicture='https://media.milanote.com/p/images/1JizMx1OFJ8ber/B2O/doutor.jpg'
          mode='medico'
          name='Dr. Áuzio Varella'
          onDefineClick={mockFunction}
          onCancelClick={mockFunction}
          onSubmitClick={mockFunction}
          definingAvailability={true}
        />
      </VBox>
    </Root>
  );
};
