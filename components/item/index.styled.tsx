import styled from 'styled-components';
import { ItemThumbnail } from 'components/common';

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
