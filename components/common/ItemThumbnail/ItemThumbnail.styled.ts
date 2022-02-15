import styled from 'styled-components';

export const ItemThumbnail = styled.li`
  list-style: none;
  .presentation-a {
    display: flex;
  }
`;

export const ItemThumbnailWrapper = styled.div`
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  min-height: 70px;
  background: ${props => props.theme.colors.white};
`;
