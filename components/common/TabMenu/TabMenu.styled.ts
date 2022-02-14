import styled from 'styled-components/macro';

export const TabMenuWrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px;
`;

export const TabMenuItem = styled.button`
  all: unset;
  padding: 10px 14px 9px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
