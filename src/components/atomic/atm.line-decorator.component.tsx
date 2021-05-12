import styled from 'styled-components';
import { styleguide } from '../styleguide';

export const StyledLineDecorator = styled.span`
  flex: 1;
  background-color: ${styleguide.colors.primary};
  height: ${styleguide.spacing.xSmall};
`;

export const StyledLineSeparator = styled.span`
  flex: 1;
  display: flex;
  background-color: ${styleguide.colors.lightGray};
  height: 1px;
`;


export const StyledHeaderSeparator = styled.span`
  background-color: ${styleguide.colors.primary};
  height: ${styleguide.spacing.xSmall};
`;

export const StyledLevelLine = styled.span`
  background-color: ${styleguide.colors.black};
  height: ${styleguide.spacing.xSmall};
`;