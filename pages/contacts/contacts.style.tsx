import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Information = styled.div`
  width: 100%;
  height: 200px;
  padding: 17px;
`;

export const Section = styled.section`
  width: 100%;
`;

export const Content = styled.div<{ time?: boolean }>`
  margin-bottom: 2px;
  color: ${props => (props.time ? theme.colors.gray : theme.colors.black)};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 17px;
`;

export const Question = styled.div`
  height: 81px;
  padding: 17px 17px 71px;
`;

export const H1 = styled.h1`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  line-height: 19px;
`;

export const Divider = styled.hr`
  height: 10px;
  margin: 0;
  border: none;
  background: ${({ theme }) => theme.colors.backgroundInsideGray};
`;
