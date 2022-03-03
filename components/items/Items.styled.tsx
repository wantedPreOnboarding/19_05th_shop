import styled from 'styled-components';
import { BackDrop, ItemThumbnail } from 'components/common';
import FullWitdhButton from 'components/common/FullWidthButton/FullWidthButton';

export const PaddedItemThumbnail = styled(ItemThumbnail)`
  a > div:first-child {
    padding: 12px 10px 8px;
  }
  padding-bottom: 17px;
`;

export const ItemsLayout = styled.section`
  padding: 17px 29px 17px 17px;
  margin-bottom: 77px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInsideGray};
  background-color: ${({ theme }) => theme.colors.white};
  > section {
    padding-top: 18.33px;
  }
`;

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
