import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import { commaNumber } from 'uilts';
import * as S from './OptionSelector.styled';
import OptionSelectorProps from './OptionSelector.type';

const OptionSelector = ({ options }: SCProps<OptionSelectorProps>): ReactElement => {
  return (
    <S.OptionSelector>
      <label htmlFor="item-select">옵션 선택하기</label>
      <S.Select id="item-select" role="select">
        {options.map(({ count, expireAt, sellingPrice, discountRate }, index) => (
          <S.Option key={index} role="option">
            <S.OptionTitleContentWrapper>
              <div>
                <S.OptionTitle>유효기간</S.OptionTitle>
                <S.OptionContent>{expireAt} 까지</S.OptionContent>
              </div>
              <div>
                <S.OptionTitle>할인가</S.OptionTitle>
                <S.OptionContent>{commaNumber(sellingPrice)}원</S.OptionContent>
              </div>
            </S.OptionTitleContentWrapper>
            <S.OptionDiscountRate>{discountRate}%</S.OptionDiscountRate>
          </S.Option>
        ))}
      </S.Select>
    </S.OptionSelector>
  );
};
export default OptionSelector;
