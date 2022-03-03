import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background: #e5e5e5;
  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 1rem;
  }
`;

export const Layout = styled.div`
  position: relative;
  max-width: none;
  max-height: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: ${props => props.theme.colors.backgroundInsideGray};
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 375px;
    max-height: 812px;
  }
`;
