import styled from 'styled-components';
import { theme } from 'styles/theme';

export const TabMenuContainer = styled.div`
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
`;

export const TabMenuItem = styled.button<{ selected?: boolean }>`
  all: unset;
  height: 20px;
  padding: 10px 14px ${props => (props.selected ? 9 : 10)}px;
  color: ${props =>
    props.selected ? ({ theme }) => theme.colors.red : ({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  border-bottom: ${props =>
    props.selected ? '2px solid ' + theme.colors.red : '1px solid ' + theme.colors.borderGray};
  cursor: pointer;
`;

export const TabMenuFlexWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  height: 46px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderGray};
  justify-content: center;
`;

export const TabMenuFnqItem = styled.button<{ selected?: boolean }>`
  all: unset;
  width: 100%;
  height: 14px;
  padding: 13px 0;
  color: ${props =>
    props.selected ? ({ theme }) => theme.colors.red : ({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  text-align: center;
  ${props => props.selected && 'border-bottom: 2px solid ' + theme.colors.red};
  cursor: pointer;
`;
