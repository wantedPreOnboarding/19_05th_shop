import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import * as S from './BackDrop.styled';

const BackDrop = ({ className }: SCProps): ReactElement => <S.BackDrop className={className} />;
export default BackDrop;
