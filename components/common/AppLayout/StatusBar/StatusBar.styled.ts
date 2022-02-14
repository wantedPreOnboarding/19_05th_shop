import styled from 'styled-components';

export const FullBar = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 13px 18px;
`;

export const SettingIcons = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  span {
    margin-left: 8px;
  }
`;

export const SettingIcon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 4.5px;
`;
