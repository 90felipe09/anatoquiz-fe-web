import { styleguide } from 'components/styleguide';
import styled from 'styled-components';

export interface StyledIconInterface {
  source: string;
  clickable?: boolean;
}

export const StyledIcon = styled.image`
  background-image: url(${(props: StyledIconInterface) => props.source});
  background-repeat: no-repeat;
  height: ${styleguide.sizes.iconSize};
  width: ${styleguide.sizes.iconSize};
  ${(props: StyledIconInterface) => props.clickable && ':hover{cursor:pointer}'};
`;
