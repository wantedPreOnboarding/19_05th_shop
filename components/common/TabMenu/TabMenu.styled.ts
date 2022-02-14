import styled from 'styled-components';
import { theme } from 'styles/theme';

export const TabMenuContainer = styled.div`
  /* display: flex; */
  width: 100%;
  height: 41px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  //스크롤 바 숨기기
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabMenuWrapper = styled.div`
  padding: 0 10px;
  height: 41px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderGray};
  /* box-sizing: border-box; */
`;

export const TabMenuItem = styled.button<{ isSelect?: boolean }>`
  all: unset;
  height: 20px;
  padding: 10px 14px ${props => (props.isSelect ? 9 : 10)}px;
  color: ${props =>
    props.isSelect ? ({ theme }) => theme.colors.red : ({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: ${props =>
    props.isSelect ? '2px solid ' + theme.colors.red : '1px solid ' + theme.colors.borderGray};
  cursor: pointer;
  /* box-sizing: content-box; */
`;
