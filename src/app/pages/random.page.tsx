import { H3, H4 } from 'components/atomic/atm.typography.styled';
import { BodyContent } from 'components/atomic/atm.wrapper.component';
import { HBox, HBoxItem, Root, VSeparator } from 'components/atomic/obj.grid.components';
import { floor } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRandom } from 'app/hooks/random.hook';
import { RandomComponentPage } from './random.component';

export interface RandomPageProps {}

export const waitForSeconds = async (milisseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milisseconds));
};

const TIME_TO_CHANGE = 500;
const TIME_TO_REDIRECT = 3000;

const getNewCategory = (selectedCategory: string) => {
  const Categories: string[] = [
    'Cardiovascular',
    'Mediastino',
    'Respiratório',
    'Encéfalo',
    'Medula e anexos',
    'Aleatório',
  ];
  let number = parseInt(floor(Math.random() * (Object.values(Categories).length - 1)).toString());
  let newRandomCategory = Categories[number];
  while (newRandomCategory === selectedCategory) {
    number = parseInt(floor(Math.random() * (Object.values(Categories).length - 1)).toString());
    newRandomCategory = Categories[number];
  }
  return newRandomCategory;
};

export const RandomPage: React.FC<RandomPageProps> = props => {
  const [selectedCategory, selectCategory] = useState<string>('Cardiovascular');
  const [selecionando, setSelecionando] = useState<boolean>(true);
  const [countdown, setCountdown] = useState<number>(10);

  const history = useHistory();

  const endCountdown = () => {
    history.push('/countdown');
  };

  const handleIteration = () => {
    selectCategory(getNewCategory(selectedCategory));
    setCountdown(countdown - 1);
    if (countdown === 0 && selecionando) {
      setSelecionando(!selecionando);
      setTimeout(endCountdown, TIME_TO_REDIRECT);
    }
  };

  useEffect(() => {
    countdown >= 0 && setTimeout(handleIteration, TIME_TO_CHANGE);
  }, [selectedCategory, selecionando, countdown]);

  return <RandomComponentPage selecionando={selecionando} selectedCategory={selectedCategory} />;
};
