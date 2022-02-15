import styled from 'styled-components';
import { SERVICE_CENTER } from 'consts/constants';
export const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 10px 16px 20px 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.title === SERVICE_CENTER && '10px'};
`;
export const PageTitle = styled.span`
  font-weight: 700;
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
