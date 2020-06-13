import styled from 'styled-components';

export interface StyledImageProps {
  src: string;
  width?: string;
}

export const StyledImage = styled.img`
  background: url(${(props: StyledImageProps) => props.src});
  width: ${(props: StyledImageProps) => props.width ? props.width : '100%'};
  height: auto;
`;
