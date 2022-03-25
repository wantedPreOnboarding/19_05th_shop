import React, { ReactElement, useState } from 'react';
import { Option } from 'apis/models/Item.type';
import { commaNumber, dateFormatting } from 'utils';
import { OptionSelector, SelectedOptionViewer } from '../innerPaths';
import * as S from './OptionsViewer.styled';

const OptionViewer = ({
  options,
  minSellingPrice,
  originalPrice,
}: {
  options: Option[];
  minSellingPrice: number;
  originalPrice: number;
}): ReactElement => {
  const [isActivePurchaseBtn, setIsActivePurchaseBtn] = useState(true);
  const [isActiveOptionSelector, setIsActiveOptionSelector] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<number>(-1);

  const optionsWithDiscountRate = options.map((option, index) => ({
    ...option,
    id: index,
    discountRate: Math.floor((1 - minSellingPrice / originalPrice) * 100),
  }));

  const handleSelector = (state: 'open' | 'close') => {
    if (!isActivePurchaseBtn && state === 'open') return;
    setSelectedOptionId(-1);
    setIsActivePurchaseBtn(state === 'close');
    setIsActiveOptionSelector(state === 'open');
  };

  const handlePurchaseBtnClick = () => {
    if (!isActivePurchaseBtn && isActiveOptionSelector && selectedOptionId === -1) {
      return;
    }
    if (selectedOptionId !== -1) {
      window.alert('베타 버전에서는 구매하실 수 없습니다.');
      return;
    }
    handleSelector('open');
  };

  const handleOptionSelectorClick = (optionId: number) => {
    setSelectedOptionId(optionId);
    setIsActiveOptionSelector(false);
    setIsActivePurchaseBtn(true);
  };

  const getSelectedOptionText = (selectedOptionId: number) => {
    const option = optionsWithDiscountRate.find(({ id }) => id === selectedOptionId);
    return typeof option?.expireAt === 'string'
      ? `${dateFormatting(option.expireAt)} 까지 / ${commaNumber(option.sellingPrice)}원`
      : '선택된 옵션이 없습니다.';
  };

  return (
    <>
      <S.HasActiveStateFullWidthButton
        onClick={handlePurchaseBtnClick}
        isActive={isActivePurchaseBtn}
        className="purchase-btn"
        backgroundColor={isActivePurchaseBtn ? 'sideMenuRed' : 'borderGray'}
        color="white"
      >
        {isActiveOptionSelector || selectedOptionId !== -1 ? '구매하기' : '옵션 선택하기'}
      </S.HasActiveStateFullWidthButton>
      {isActiveOptionSelector && (
        <>
          <S.NotFullBackDrop onClick={() => handleSelector('close')} />
          <OptionSelector
            closeSelector={() => handleSelector('close')}
            options={optionsWithDiscountRate}
            handleSelect={handleOptionSelectorClick}
          />
        </>
      )}
      {selectedOptionId !== -1 && (
        <SelectedOptionViewer
          openSelector={() => {
            handleSelector('open');
          }}
          option={getSelectedOptionText(selectedOptionId)}
        />
      )}
    </>
  );
};
export default OptionViewer;
