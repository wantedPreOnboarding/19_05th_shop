import styled from 'styled-components';

export const SelectedOptionViewer = styled.div`
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  padding: 17px;
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.m};
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 14px 6px 17px;
  background-color: ${props => props.theme.colors.ligthGray};
  border-radius: 5px;
`;
