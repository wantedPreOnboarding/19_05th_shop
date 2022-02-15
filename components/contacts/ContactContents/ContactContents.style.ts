import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Container = styled.div`
  font-size: ${theme.fontSize.l};
`;

export const Wrapper = styled.div`
  padding: 17px;
  background-color: ${theme.colors.white};
  border-bottom: 2px solid ${theme.colors.backgroundInsideGray};
`;

export const ContentWrapper = styled.div<{ contentOpen: boolean }>`
  display: ${props => (props.contentOpen ? 'block' : 'none')};
  padding: 17px;
  background-color: ${theme.colors.backgroundInsideGray};
  border-bottom: 2px solid ${theme.colors.backgroundInsideGray};
`;

export const Title = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: start;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.l};
  font-weight: ${theme.fontWeight.semiStrong};
  cursor: pointer;
`;

export const Q = styled.span`
  margin-right: 5px;
  color: ${theme.colors.red};
  font-weight: ${theme.fontWeight.semiStrong};
`;

export const Content = styled.div`
  margin: 16px 0;
  color: ${theme.colors.black};
  line-height: 21px;
  font-weight: ${theme.fontWeight.normal};
  flex-grow: 1;
`;

export const ArrowDownSvg = styled.img.attrs({
  src: `${process.env.ASSET_PATH}/back.svg`,
})<{ contentOpen?: boolean }>`
  width: 16px;
  height: 18px;
  margin-left: 10px;
  -ms-transform: ${props =>
    props.contentOpen ? `rotate(90deg)` : `rotate(270deg)`}; // IE 9 이상에서 사용
  -webkit-transform: ${props =>
    props.contentOpen ? `rotate(90deg)` : `rotate(270deg)`}; // 사파리, 크롬, 오페라 브라우저 사용
  transform: ${props => (props.contentOpen ? `rotate(90deg)` : `rotate(270deg)`)};
  alt: '이동 버튼';
`;
