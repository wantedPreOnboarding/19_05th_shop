import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #e5e5e5;
`;

export const Layout = styled.div`
  position: relative;
  max-width: 375px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${props => props.theme.colors.backgroundInsideGray};
  display: flex;
  flex-direction: column;
`;
