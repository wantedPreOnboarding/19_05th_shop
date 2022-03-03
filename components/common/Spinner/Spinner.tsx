import React, { ReactElement } from 'react';
import * as S from './Spinner.styled';

const Spinner = (): ReactElement => (
  <S.Wrapper>
    <S.Spinner>
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
    </S.Spinner>
  </S.Wrapper>
);

export default Spinner;
