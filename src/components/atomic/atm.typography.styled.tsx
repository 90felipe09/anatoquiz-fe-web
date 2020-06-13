import styled from 'styled-components';
import { styleguide } from '../styleguide';

export const H1 = styled.h1`
  margin: 0;
  font-size: ${styleguide.typography.H1};
  font-family: ${styleguide.fonts.primary};
  font-weight: normal;
`;

export const H2 = styled.h2`
  font-size: ${styleguide.typography.H2};
  font-family: ${styleguide.fonts.primary};
  font-weight: normal;
`;

export const H3 = styled.h3`
  font-size: ${styleguide.typography.H3};
  font-family: ${styleguide.fonts.primary};
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  font-size: ${styleguide.typography.H4};
  font-family: ${styleguide.fonts.primary};
  color: ${styleguide.colors.primary};
`;

export const H5 = styled.h5`
  font-size: ${styleguide.typography.H5};
  font-family: ${styleguide.fonts.primary};
  text-transform: uppercase;
  color: ${styleguide.colors.primary};
`;

export const Body = styled.p`
  font-size: ${styleguide.typography.Body};
  font-family: ${styleguide.fonts.primary};
`;

export const BodySecondary = styled.p`
  font-size: ${styleguide.typography.BodySecondary};
  font-family: ${styleguide.fonts.primary};
`;

export const Caption = styled.p`
  font-size: ${styleguide.typography.caption};
  font-family: ${styleguide.fonts.primary};
  font-style: italic;
`;

export const Label = styled.p`
  font-size: ${styleguide.typography.Label};
  font-family: ${styleguide.fonts.primary};
  font-weight: bold;
`;

export const HeaderLabel = styled.p`
  font-size: ${styleguide.typography.Label};
  font-family: ${styleguide.fonts.primary};
  color: ${styleguide.colors.white};
  font-weight: bold;
  flex: 1;
  display:flex;
  justify-content: center;
  align-content: center;
`;

export const InputLabel = styled.p`
  font-size: ${styleguide.typography.InputLabel};
  font-family: ${styleguide.fonts.primary};
  font-weight: bold;
`;

export const InputValue = styled.p`
  font-size: ${styleguide.typography.InputValue};
  font-family: ${styleguide.fonts.primary};
`;

export const InputCaptionError = styled.p`
  font-size: ${styleguide.typography.InputCaptionError};
  font-family: ${styleguide.fonts.primary};
  color: ${styleguide.colors.error};
  font-weight: bold;
`;

export const TimeValue = styled.p`
  margin: 0;
  font-size: ${styleguide.typography.BodySecondary};
  font-family: ${styleguide.fonts.primary};
  color: ${props => props.color};
  font-weight: normal;
`;
