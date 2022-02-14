import styled from 'styled-components';
import { ItemThumbnail } from 'components/common';

export const PaddedItemThumbnail = styled(ItemThumbnail)`
  a > div:first-child {
    padding: 12px 10px 8px;
  }
  margin-bottom: 17px;
`;

export const ItemsLayout = styled.section`
  padding: 17px;
`;
