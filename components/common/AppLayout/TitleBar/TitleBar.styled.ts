import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 16px 20px 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;

export const TitleBtn = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  position: absolute;
  left: 10px;
`;
