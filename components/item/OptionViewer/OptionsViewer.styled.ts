import { BackDrop } from 'components/common';
import FullWitdhButton from 'components/common/FullWidthButton/FullWidthButton';
import styled from 'styled-components';

export const HasActiveStateFullWidthButton = styled(FullWitdhButton)<{ isActive: boolean }>`
  cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const NotFullBackDrop = styled(BackDrop)`
  top: 220px;
`;
