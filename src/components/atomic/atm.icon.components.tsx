import { styleguide } from 'components/styleguide';
import styled from 'styled-components';

export interface StyledIconInterface {
  source: string;
  clickable?: boolean;
}

export const StyledIcon = styled.image`
  background-image: url(${(props: StyledIconInterface) => props.source});
  background-repeat: no-repeat;
  height: ${styleguide.sizes.iconSize}px;
  width: ${styleguide.sizes.iconSize}px;
  margin: ${styleguide.spacing.small};
  ${(props: StyledIconInterface) => props.clickable && ':hover{cursor:pointer}'};
`;

export const StyledFeedbackIcon = styled.image`
  background-image: url(${(props: StyledIconInterface) => props.source});
  background-repeat: no-repeat;
  height: ${styleguide.sizes.iconSize}px;
  width: ${styleguide.sizes.iconSize}px;
  display: flex;
  margin-top: ${styleguide.sizes.iconSize/2}px;
`;

export const StyledFeedbackIconContainer = styled.div`
  height: ${styleguide.sizes.feedbackIconSize};
  width: ${styleguide.sizes.feedbackIconSize};
  background-color: ${styleguide.colors.white};
  border-radius: 50%;
  align-content: 'center';
`;
