import styled from 'styled-components';

export const OptionSelector = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > label {
    display: flex;
    background-color: ${props => props.theme.colors.ligthGray};
    align-items: center;
    height: 49px;
    padding: 16px 17px;
  }
`;
export const Select = styled.div`
  height: 183px;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.white};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 22.5px 12px 17px;
  height: 61px;
  border-bottom: 1px solid ${props => props.theme.colors.backgroundInsideGray};
  cursor: pointer;
`;

export const OptionTitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
  }
  > div:first-child {
    margin-bottom: 6px;
  }
`;

export const OptionTitle = styled.span`
  color: ${props => props.theme.colors.gray};
  flex-basis: 44px;
  width: 44px;
  margin-right: 9px;
  flex-shrink: 0;
  word-break: keep-all;
  font-size: ${props => props.theme.fontSize.xs};
`;

export const OptionContent = styled.span`
  color: ${props => props.theme.colors.deepBlack};
  font-size: ${props => props.theme.fontSize.xl};
  overflow: hidden;
  white-space: nowrap;
`;

export const OptionDiscountRate = styled.span`
  color: ${props => props.theme.colors.sideMenuRed};
  display: flex;
  align-items: center;
`;
