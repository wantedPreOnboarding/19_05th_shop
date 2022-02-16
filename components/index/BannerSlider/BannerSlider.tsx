import React, { useState, useEffect } from 'react';
import * as S from './BannerSlider.styled';
import { colorArray, BannerMouseEvent, BannerTouchEvent } from './BannerSlider.type';

const BannerSlider = () => {
  const TOTAL_SLIDES = 2;
  const colorLists: colorArray[] = [
    { num: 0, color: 'e9e1d4' },
    { num: 1, color: 'f4ddad' },
    { num: 2, color: 'f1bcae' },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [startClientX, setStartClientX] = useState<number>(0);
  const [endClientX, setEndClientX] = useState<number>(0);

  const [cursorOn, setCursorOn] = useState<boolean>(false);

  const bannerHandler = (idx: number) => {
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
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
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
      <S.BannerWrap currentSlide={currentSlide}>
        {colorLists.map(colorList => (
          <S.BannerBox
            onTouchStart={e => touchStartHandler(e)}
            onTouchEnd={e => touchEndtHandler(e)}
            onMouseDown={e => mouseDownHandler(e)}
            onMouseUp={e => mouseUpHandler(e)}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            key={colorList.num}
          >
            <img src={`http://placehold.it/375x140.png/${colorList.color}`} draggable="false" />
          </S.BannerBox>
        ))}
      </S.BannerWrap>
      <S.NavBtns>
        {colorLists.map(colorList => (
          <S.NavBtn
            currentSlide={currentSlide}
            slideNum={colorList.num}
            key={colorList.num}
            onClick={() => bannerHandler(colorList.num)}
          />
        ))}
      </S.NavBtns>
    </S.Wrapper>
  );
};

export default BannerSlider;
