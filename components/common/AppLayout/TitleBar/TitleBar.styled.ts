import styled from 'styled-components';
import { SERVICE_CENTER } from 'consts/constants';
export const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 10px 16px 17px 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.title === SERVICE_CENTER && '20px'};
  background: ${props => props.theme.colors.white};
`;
export const PageTitle = styled.span`
  font-weight: ${props => props.theme.fontWeight.strong};
  font-size: ${props => props.theme.fontSize.l};
  display: flex;
  justify-content: center;
`;

const TitleIcon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  position: absolute;
`;

export const LeftBtn = styled(TitleIcon)`
  left: 10px;
  cursor: pointer;
`;

export const CancleBtn = styled(TitleIcon)`
  right: 19px;
`;
