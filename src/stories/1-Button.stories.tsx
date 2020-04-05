import React from 'react';
import { PrimaryButton, SecondaryButton, GoBackButton, CancelButton, TextButton } from 'components/atomic/atm.buttons.component';
import { Root, HBox, HBoxItem } from 'components/atomic/obj.grid.components';

export default {
  title: 'Button',
  component: PrimaryButton,
};

export const PrimaryButtonStory = () => {
  const demoFunction = () => {
    alert('Clicked');
  };
  return (
    <Root>
      <HBox>
        <HBoxItem>
          <PrimaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem>
          <PrimaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <PrimaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
    </Root>
  );
};

export const SecondaryButtonStory = () => {
  const demoFunction = () => {
    alert('Clicked');
  };
  return (
    <Root>
      <HBox>
        <HBoxItem>
          <SecondaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <SecondaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <SecondaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem wrap={true}>
          <SecondaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <SecondaryButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
    </Root>
  );
};

export const GoBackButtonStory = () => {
  const demoFunction = () => {
    alert('Clicked');
  };
  return (
    <Root>
      <HBox>
        <HBoxItem>
          <GoBackButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <GoBackButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <GoBackButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem wrap={true}>
          <GoBackButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <GoBackButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
    </Root>
  );
};

export const CancelButtonStory = () => {
  const demoFunction = () => {
    alert('Clicked');
  };
  return (
    <Root>
      <HBox>
        <HBoxItem>
          <CancelButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <CancelButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <CancelButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem wrap={true}>
          <CancelButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <CancelButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
    </Root>
  );
};


export const TextButtonStory = () => {
  const demoFunction = () => {
    alert('Clicked');
  };
  return (
    <Root>
      <HBox>
        <HBoxItem>
          <TextButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <TextButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <TextButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
      <HBox>
        <HBoxItem wrap={true}>
          <TextButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
        <HBoxItem>
          <TextButton disabled={false} text={'Click'} onClick={demoFunction} />
        </HBoxItem>
      </HBox>
    </Root>
  );
};
