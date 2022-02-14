import styled from 'styled-components';
import FullWidthButtonProps from './FullWidthButton.type';
import { theme } from 'styles/theme';

export const FullWidthButton = styled.button<FullWidthButtonProps>`
  width: 100%;
  background-color: ${props => theme.colors[props.backgroundColor]};
  color: ${props => theme.colors[props.color]};
  height: 5rem;
  padding-bottom: 20px;
  font-size: 1rem;
`;
