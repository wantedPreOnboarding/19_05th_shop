import styled from 'styled-components';
import { theme } from 'styles/theme';

export const MenuContainer = styled.div<{ openSideMenu: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: ${props => (props.openSideMenu ? 'translateX(0px)' : 'translateX(-100%)')};
  transition: transform 0.5s ease-in-out;
  z-index: 66;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Nav = styled.nav`
  margin: auto 0;
  width: 100%;
  height: 58px;
`;

export const Section = styled.section`
  width: 100%;
  height: 212px;
  padding: 17px;
  background: ${({ theme }) => theme.colors.backgroundInsideGray};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const SectionMyMoney = styled.div`
  width: 100%;
  height: 78px;
  padding: 28px 14px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInsideGray};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SectionMyMoneyHistory = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  height: 100px;
  padding: 14px 0;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInsideGray};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  padding: 17px;
`;

export const Login = styled.button`
  width: 100%;
  padding: 14px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 7px;
`;

export const CloseBtn = styled.button`
  width: 58px;
  height: 58px;
  border: none;
`;

export const Flex = styled.div<{ color?: string; padding?: boolean }>`
  display: flex;
  width: 100%;
  height: ${props => (props.padding ? 50 : 20)}px;
  ${props => props.padding && `padding: 15px 17px;`}
  ${props => props.padding && `font-weight: ${theme.fontWeight.strong}`}
  align-items: center;
  justify-content: space-between;
  ${props => props.color === 'red' && `color: ${theme.colors.red};`}
  cursor: pointer;
`;

export const FlexItem = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Divider = styled.hr`
  height: 10px;
  margin: 0;
  border: none;
  background: ${({ theme }) => theme.colors.backgroundInsideGray};
`;

export const Li = styled.li`
  text-decoration: none;
`;
export const Ol = styled.ol`
  text-decoration: none;
`;

export const NiconMoneyHistoryImg = styled.img.attrs({ src: `./assets/niconMoneyHistory.png` })`
  width: 50px;
  height: 50px;
  alt: '니콘머니 내역';
  margin: 0 auto 7px;
`;

export const PurchaseHistoryImg = styled.img.attrs({ src: `./assets/purchaseHistory.png` })`
  width: 50px;
  height: 50px;
  alt: '구매 내역';
  margin: 0 auto 7px;
`;

export const ArrowSvg = styled.img.attrs({ src: `./assets/back.svg` })`
  width: 19px;
  height: 20px;
  transform: scaleX(-1);
  alt: '이동 버튼';
`;

export const CloseSvg = styled.img.attrs({ src: `./assets/close.svg` })`
  width: 30px;
  height: 30px;
  alt: '닫기 버튼';
`;
