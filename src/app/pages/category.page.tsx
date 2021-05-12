import { Root, HBox, VSeparator, HBoxItem, HBoxSeparator } from 'components/atomic/obj.grid.components';
import React, { useState, useContext, useEffect } from 'react';
import { NavigationBar, MenuOption } from 'components/atomic/org.navbar.component';
import { BodyContent, ListContent } from 'components/atomic/atm.wrapper.component';
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
import { GlobalState } from 'app/components/global-state/global-state.provider';

export interface CategoryPageProps {}

export const CategoryPage: React.FC<CategoryPageProps> = props => {
  const history = useHistory();
  const context = useContext(GlobalState);

  enum categories {
    Cardiovascular = 'Cardiovascular',
    Mediastino = 'Mediastino',
    Respiratório = 'Respiratório',
    Encéfalo = 'Encéfalo',
    Medula = 'Medula e anexos',
    Aleatório = 'Aleatório',
  }
  useEffect(()=>{!context.token && history.push('/');},[]);
  
  const handleCategorySelection = (category: string) => {
    if(category === categories.Aleatório){
      history.push('/random')
    }
    else{
      history.push('/countdown')
    }
  }

  return (
    <Root>
      <BodyContent>
        <HBox>
          <HBoxItem vAlign='center'>
            <H4>Escolha uma categoria</H4>
          </HBoxItem>
        </HBox>
        <ListContent>
          {Object.values(categories).map(category => {
            return (
              <HBox>
                <HBoxSeparator />
                <PrimaryButton text={category} onClick={() => handleCategorySelection(category)} />
                <HBoxSeparator />
              </HBox>
            );
          })}
        </ListContent>
      </BodyContent>
    </Root>
  );
};
