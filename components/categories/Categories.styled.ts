import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 17px;
`;
export const Box = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 17px;
  border-radius: 5px;
  background: ${props => props.theme.colors.white};
  margin-bottom: 1px;
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 375px;
  }
`;