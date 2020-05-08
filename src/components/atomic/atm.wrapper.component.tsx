import styled from 'styled-components';
import { styleguide } from 'components/styleguide';

export const BodyContent = styled.section`
  top: ${styleguide.sizes.NavBar};
  position: absolute;
  width: 100%;
  overflow-y: scroll;
  z-index: 1;
`;
export const ScrollableContent = styled.section`
  overflow-y: scroll;
  max-height: ${styleguide.sizes.ContentHeight};
`;
