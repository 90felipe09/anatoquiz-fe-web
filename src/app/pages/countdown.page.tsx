import { RandomComponentPageProps } from './random.component';
import { Root, VSeparator, HBox, HBoxItem } from 'components/atomic/obj.grid.components';
import React, { useState, useEffect } from 'react';
import { BodyContent } from 'components/atomic/atm.wrapper.component';
import { H4, H3 } from 'components/atomic/atm.typography.styled';
import { set } from 'lodash';
import { waitForSeconds } from './random.page';
import { useHistory } from 'react-router-dom';

export interface CountdownPageProps {}

export const CountdownPage: React.FC<CountdownPageProps> = props => {
  const [countdown, setCountdown] = useState<number>(3);
  const history = useHistory();

  useEffect(() => {
    countdown >= 0 && setTimeout(()=>setCountdown(countdown - 1), 1000);
    if(countdown < 0) {
      history.push('/question')
    }
  }, [countdown])

  return (
    <Root>
      <BodyContent>
        <VSeparator />
        <VSeparator />
        <VSeparator />
        <VSeparator />
        <HBox>
          <HBoxItem vAlign='center'>
            <H4>{'Partida começando em:'}</H4>
          </HBoxItem>
        </HBox>

        <HBox>
          <HBoxItem vAlign='center'>
            <H3>{countdown}</H3>
          </HBoxItem>
        </HBox>
      </BodyContent>
    </Root>
  );
};
