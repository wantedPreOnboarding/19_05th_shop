import styled from 'styled-components';

export const FullBar = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 13px 18px;
  background: ${props => props.theme.colors.white};
`;

export const SettingIcons = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.s};
  font-weight: ${props => props.theme.fontWeight.strong};
  span {
    margin-left: 8px;
  }
`;

export const SettingIcon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 4.5px;
`;
