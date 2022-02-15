import styled from 'styled-components';

export const CountBox = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 1px;
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 17px;
  font-size: ${props => props.theme.fontSize.m};
  font-weight: ${props => props.theme.fontWeight.strong};
  span {
    opacity: 80%;
  }
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

export const List = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-top: 9px;
  background: #f1f3f4;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 1px;
  padding: 10px;
  background: #fff;
`;

export const ImgWrapper = styled.div`
  img {
    width: 70px;
    height: 70px;
    padding: 10px;
    margin-right: 15px;
    background: #f1f3f4;
    border-radius: 5px;
  }
`;

export const Title = styled.h3`
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  color: #000;
`;

export const Sale = styled.span`
  padding-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.sideMenuRed};
`;

export const Price = styled.b`
  padding-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  color: #000;
`;

export const MinPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration-line: line-through;
  color: ${({ theme }) => theme.colors.gray};
`;
