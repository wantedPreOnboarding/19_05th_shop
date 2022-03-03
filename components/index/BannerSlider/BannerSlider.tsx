import React, { useState, useEffect } from 'react';
import * as S from './BannerSlider.styled';
import { colorArray, BannerMouseEvent, BannerTouchEvent } from './BannerSlider.type';

const BannerSlider = () => {
  const TOTAL_SLIDES = 4;
  const colorLists: colorArray[] = [
    { num: 3, color: 'f1bcae' },
    { num: 1, color: 'e9e1d4' },
    { num: 2, color: 'f4ddad' },
    { num: 3, color: 'f1bcae' },
    { num: 1, color: 'e9e1d4' },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [startClientX, setStartClientX] = useState<number>(0);
  const [endClientX, setEndClientX] = useState<number>(0);

  const [cursorOn, setCursorOn] = useState<boolean>(false);
  const [movingOn, setMovingOn] = useState<boolean>(true);

  const bannerHandler = (idx: number) => {
    if ((currentSlide === 4 && idx === 1) || (currentSlide === 0 && idx === 3)) {
      setMovingOn(false);
      setCurrentSlide(idx);
      setTimeout(() => {
        setMovingOn(true);
      }, 500);
    }

    setCurrentSlide(idx);
  };

  const touchStartHandler = (e: BannerTouchEvent) => {
    setStartClientX(e.changedTouches[0].clientX);
  };

  const touchEndtHandler = (e: BannerTouchEvent) => {
    setEndClientX(e.changedTouches[0].clientX);
  };
  const mouseDownHandler = (e: BannerMouseEvent) => {
    setStartClientX(e.clientX);
  };
  const mouseUpHandler = (e: BannerMouseEvent) => {
    setEndClientX(e.clientX);
  };

  const mouseEnterHandler = () => {
    setCursorOn(true);
  };
  const mouseLeaveHandler = () => {
    setCursorOn(false);
  };

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setMovingOn(false);
      setCurrentSlide(1);
      setTimeout(() => {
        setMovingOn(true);
      }, 500);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setMovingOn(false);
      setCurrentSlide(3);
      setTimeout(() => {
        setMovingOn(true);
      }, 500);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    if (cursorOn) {
      startClientX - endClientX < 0 ? prevSlide() : nextSlide();
    }
  }, [endClientX]);

  useEffect(() => {
    if (cursorOn) {
      return;
    } else {
      const imageInterval = setTimeout(() => {
        nextSlide();
      }, 5000);
      return () => {
        clearTimeout(imageInterval);
      };
    }
  }, [currentSlide, cursorOn]);

  return (
    <S.Wrapper>
      <S.BannerWrap movingOn={movingOn} currentSlide={currentSlide}>
        {colorLists.map((colorList, index) => (
          <S.BannerBox
            onTouchStart={e => touchStartHandler(e)}
            onTouchEnd={e => touchEndtHandler(e)}
            onMouseDown={e => mouseDownHandler(e)}
            onMouseUp={e => mouseUpHandler(e)}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            key={index}
            color={colorList.color}
          >
            <div />
          </S.BannerBox>
        ))}
      </S.BannerWrap>
      <S.NavBtns>
        {colorLists.splice(1, 3).map((dotList, index) => {
          return (
            <S.NavBtn
              currentSlide={currentSlide === 4 ? 1 : currentSlide === 0 ? 3 : currentSlide}
              slideNum={dotList.num}
              key={index}
              onClick={() => bannerHandler(dotList.num)}
            />
          );
        })}
      </S.NavBtns>
    </S.Wrapper>
  );
};

export default BannerSlider;
