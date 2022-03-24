import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import { commaNumber, dateFormatting } from 'utils';
import * as S from './OptionSelector.styled';
import OptionSelectorProps from './OptionSelector.type';

const OptionSelector = ({
  options,
  handleSelect,
  closeSelector,
}: SCProps<OptionSelectorProps>): ReactElement => {
  return (
    <S.OptionSelector>
      <label htmlFor="item-select">
        옵션 선택하기
        <img src={`${process.env.ASSET_PATH}/cancel.svg`} alt="close" onClick={closeSelector} />
      </label>
      <S.Select id="item-select" role="select">
        {options.map(
          ({ count, expireAt, sellingPrice, discountRate, id }) =>
            count && (
              <S.Option key={id} role="option" onClick={() => handleSelect(id)}>
                <S.OptionTitleContentWrapper>
                  <div>
                    <S.OptionTitle>유효기간</S.OptionTitle>
                    {typeof expireAt === 'string' && (
                      <S.OptionContent>{dateFormatting(expireAt)} 까지</S.OptionContent>
                    )}
                  </div>
                  <div>
                    <S.OptionTitle>할인가</S.OptionTitle>
                    <S.OptionContent>{commaNumber(sellingPrice)}원</S.OptionContent>
                  </div>
                </S.OptionTitleContentWrapper>
                <S.OptionDiscountRate>{discountRate}%</S.OptionDiscountRate>
              </S.Option>
            ),
        )}
      </S.Select>
    </S.OptionSelector>
  );
};
export default OptionSelector;
