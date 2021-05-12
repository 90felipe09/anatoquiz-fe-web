import { Root, VSeparator, HBox, HBoxItem } from "components/atomic/obj.grid.components";
import React from "react";
import { BodyContent } from "components/atomic/atm.wrapper.component";
import { H4, H3 } from "components/atomic/atm.typography.styled";

export interface RandomComponentPageProps {
    selecionando: boolean;
    selectedCategory: string;
}

export const RandomComponentPage: React.FC<RandomComponentPageProps> = props => {
    return (
      <Root>
        <BodyContent>
          <VSeparator />
          <VSeparator />
          <VSeparator />
          <VSeparator />
          <HBox>
            <HBoxItem vAlign='center'>
              <H4>{props.selecionando ? 'Sorteando tema:' : 'A categoria sorteada é:'}</H4>
            </HBoxItem>
          </HBox>
  
          <HBox>
            <HBoxItem vAlign='center'>
              <H3>{props.selectedCategory}</H3>
            </HBoxItem>
          </HBox>
        </BodyContent>
      </Root>
    );
  };
  