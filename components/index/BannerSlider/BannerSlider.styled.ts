import styled from 'styled-components';
import BannerSliderProps from './BannerSlider.type';

export const Wrapper = styled.div`
  height: 141px;
  width: 100vw;

  position: relative;
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 375px;
  }
`;
export const BannerBox = styled.div<{ color: string }>`
  div {
    height: 141px;
    width: 100vw;
    ${({ theme }) => theme.breakpoints.mobile} {
      width: 375px;
    }
    background-color: #${({ color }) => color};
  }
`;

export const BannerWrap = styled.div<BannerSliderProps>`
  display: flex;
  transition: all 1s ease-in-out;
  transform: ${props => props.currentSlide && `translateX(-${props.currentSlide}00%)`};
`;
export const NavBtns = styled.div`
  width: 50px;
  height: 10px;
  position: absolute;
  bottom: 15px;
  right: 25px;
  display: flex;
  justify-content: space-between;
`;
export const NavBtn = styled.div<BannerSliderProps>`
  cursor: pointer;
  width: 10px;
  height: 10px;
  background: ${props => (props.currentSlide === props.slideNum ? 'black' : 'white')};
  border-radius: 50%;
`;
