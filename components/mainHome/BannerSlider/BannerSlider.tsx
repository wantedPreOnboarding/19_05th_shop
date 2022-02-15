import React, { useState, useEffect } from 'react';
import * as S from './BannerSlider.styled';
import { colorArray, BannerMouseEvent } from './BannerSlider.type';

const BannerSlider = () => {
  const TOTAL_SLIDES = 2;
  const colorLists: colorArray[] = [
    { num: 0, color: 'e9e1d4' },
    { num: 1, color: 'f4ddad' },
    { num: 2, color: 'f1bcae' },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);
  const [cursorOn, setCursorOn] = useState<boolean>(false);

  const bannerHandler = (idx: number) => {
    setCurrentSlide(idx);
  };

  const mouseDownHandler = (e: BannerMouseEvent) => {
    setMouseDownClientX(e.clientX);
  };
  const mouseUpHandler = (e: BannerMouseEvent) => {
    setMouseUpClientX(e.clientX);
  };
  const mouseEnterHandler = (e: BannerMouseEvent) => {
    setCursorOn(true);
  };
  const mouseLeaveHandler = (e: BannerMouseEvent) => {
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
    mouseUpClientX - mouseDownClientX < 0 ? prevSlide() : nextSlide();
  }, [mouseUpClientX]);

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
            onMouseDown={e => mouseDownHandler(e)}
            onMouseUp={e => mouseUpHandler(e)}
            onMouseEnter={e => mouseEnterHandler(e)}
            onMouseLeave={e => mouseLeaveHandler(e)}
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
