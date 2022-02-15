import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
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

export const MenuTitle = styled.section`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.strong};
  padding: 17px;
  margin-bottom: 14px;
  line-height: 19px;
  span {
    font-weight: 500;
    font-size: ${props => props.theme.fontSize.s};
    color: ${props => props.theme.colors.sideMenuRed};
    display: block;
    line-height: 16px;
    margin-bottom: 5px;
  }
`;
