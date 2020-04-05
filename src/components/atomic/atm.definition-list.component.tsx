import styled from 'styled-components';
import { styleguide } from 'components/styleguide';

// TODO: Improve DL component
export interface DLProps {
  inline?: boolean;
}

export const DLStyled = styled.span`
  display: flex;
  flex-direction: ${(props: DLProps) => (props.inline ? 'row' : 'column')};
  align-self: stretch;
`;

export const DT = styled.p`
  font-size: ${styleguide.typography.DT};
  font-family: ${styleguide.fonts.primary};
  margin-top: ${styleguide.spacing.xSmall};
  margin-bottom: ${styleguide.spacing.xSmall};
  font-weight: bold;
  margin-right: ${(props: DLProps) => (props.inline ? styleguide.spacing.xSmall : '0px')};
`;

export const DD = styled.p`
  font-family: ${styleguide.fonts.primary};
  margin-top: ${styleguide.spacing.xSmall};
  margin-bottom: ${styleguide.spacing.xSmall};
  font-size: ${styleguide.typography.DD};
  align-self: ${(props: DLProps) => (props.inline ? 'flex-end' : null)};
  ${(props: DLProps) => (props.inline ? 'flex: 99' : null)};
`;


