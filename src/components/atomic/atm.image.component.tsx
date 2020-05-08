import styled from 'styled-components';

export interface StyledImageProps {
  src: string;
}

export const StyledImage = styled.img`
  background: url(${(props: StyledImageProps) => props.src});
  width: 100%;
  height: auto;
`;
