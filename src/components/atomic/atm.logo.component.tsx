import styled from "styled-components";
import React from "react";
import { HBoxItem } from "./obj.grid.components";
import { H1 } from "./atm.typography.styled";
import { styleguide } from "components/styleguide";

export const StyledLogo = styled.span`
  padding: ${styleguide.spacing.medium};
`;

export interface LogoProps {
  logo: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <StyledLogo>
      <HBoxItem>
        <H1>{props.logo}</H1>
      </HBoxItem>
    </StyledLogo>
  );
};
