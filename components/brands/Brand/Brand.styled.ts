import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding: 0 20px;
`;

export const Item = styled.li`
  flex: 33% 0 0;
  padding: 40px 0;
  margin-bottom: 1px;
  align-items: center;
  border-radius: 5px;
  text-align: center;
`;
