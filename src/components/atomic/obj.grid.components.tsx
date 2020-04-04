import { styleguide } from 'components/styleguide';
import styled from 'styled-components';

export interface RootProps {
  bgColor?: boolean;
}

interface BoxProps {
  hAlign?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  vAlign?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
  bgColor?: boolean;
}

interface VBoxProps extends BoxProps {
  vGrow?: boolean;
  noGutter?: boolean;
}

interface HBoxProps {
  hAlign?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  vAlign?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}

interface HBoxItemProps extends BoxProps {
  wrap?: boolean;
}

interface VSeparatorProps {
  spacing?: 'xSmall' /* deprecated */;
  half?: boolean;
}

interface HSeparatorProps {
  spacing?: 'xSmall' /* deprecated */;
  half?: boolean;
}

export const Root = styled.span`
  background-color: ${(props: RootProps) => (props.bgColor ? styleguide.colors.lightGray : styleguide.colors.white)};
  flex: 1;
`;

export const VBox = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-horizontal: ${(props: VBoxProps) => (props.noGutter ? '0' : styleguide.spacing.gutter)};
  ${(props: VBoxProps) => props.vGrow && 'flex-grow: 1'};
  justify-content: ${(props: VBoxProps) => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${(props: VBoxProps) => (props.hAlign ? props.hAlign : 'stretch')};
  ${(props: VBoxProps) => props.bgColor && `background-color: ${styleguide.colors.white}`};
`;

export const VSeparator = styled.span`
  display: flex;
  height: ${(props: VSeparatorProps) =>
    (props.spacing && styleguide.spacing[props.spacing]) ||
    (props.half && styleguide.spacing.halfGutter) ||
    styleguide.spacing.gutter};
`;

export const HBox = styled.span`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: flex-start;
  justify-content: ${(props: HBoxProps) => (props.hAlign ? props.hAlign : 'flex-start')};
  align-items: ${(props: HBoxProps) => (props.vAlign ? props.vAlign : 'stretch')};
`;

export const HBoxItem = styled.span`
  display: flex;
  ${(props: HBoxItemProps) => (!props.wrap ? 'flex: 1' : null)};
  justify-content: ${(props: HBoxItemProps) => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${(props: HBoxItemProps) => (props.hAlign ? props.hAlign : 'stretch')};
`;

export const HBoxSeparator = styled.span`
  display: flex;
  width: ${(props: HSeparatorProps) =>
    (props.spacing && styleguide.spacing[props.spacing]) ||
    (props.half && styleguide.spacing.halfGutter) ||
    styleguide.spacing.gutter};
`;
