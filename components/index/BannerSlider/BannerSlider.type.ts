import React from 'react';

export default interface BannerSliderProps {
  currentSlide?: number;
  slideNum?: number;
  imageUrl?: string;
  movingOn?: boolean;
}

export interface colorArray {
  num: number;
  color: string;
}

export type BannerMouseEvent = React.MouseEvent<HTMLElement, MouseEvent>;
export type BannerTouchEvent = React.TouchEvent<HTMLDivElement>;
