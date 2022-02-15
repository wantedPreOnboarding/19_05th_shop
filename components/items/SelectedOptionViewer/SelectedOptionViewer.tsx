import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import * as S from './SelectedOptionViewer.styled';
import SelectedOptionViewerProps from './SelectedOptionViewer.type';
const SelectedOptionViewer = ({ option }: SCProps<SelectedOptionViewerProps>): ReactElement => (
  <S.SelectedOptionViewer>
    <S.InnerWrapper>
      <span>{option}</span>
      <img src={`${process.env.ASSET_PATH}/pancel.svg`} alt="선택됨" />
    </S.InnerWrapper>
  </S.SelectedOptionViewer>
);
export default SelectedOptionViewer;
