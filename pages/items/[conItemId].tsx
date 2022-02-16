import * as S from './Items.styled';

import React, { ReactNode, useState } from 'react';
import { AppLayout } from 'components/common';
import { TextsSection, OptionSelector, SelectedOptionViewer } from 'components/items';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/items';
import ItemAPIType from 'apis/models/Items.type';
import { commaNumber, dateFormatting } from 'utils';

const indexGenerator = (caution: string, index: number) => ({ id: index, text: caution });

const Items = ({ data }: { data: ItemAPIType['conItem'] }) => {
  const [isActivePurchaseBtn, setIsActivePurchaseBtn] = useState(true);
  const [isActiveOptionSelector, setIsActiveOptionSelector] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<number>(-1);

  const {
    name: itemName,
    conCategory2: brandInfo,
    discountRate,
    minSellingPrice,
    originalPrice,
    warning,
    options,
    imageUrl,
  } = data;

  const brandCautionList = brandInfo.info?.split('\n').map(indexGenerator);

  const itemCautionList = brandInfo.conCategory1.info?.split('\n').map(indexGenerator);

  const refundRuleList = warning
    ?.slice(warning.indexOf('[환불규정]'))
    ?.split('\n')
    ?.map(caution => caution.replace(' -', '·'))
    ?.slice(1)
    ?.map(indexGenerator);

  const optionsWithDiscountRate = options.map((option, index) => ({
    ...option,
    id: index,
    discountRate: Math.floor((1 - minSellingPrice / originalPrice) * 100),
  }));

  const hanleSelector = (state: 'open' | 'close') => {
    if (!isActivePurchaseBtn && state === 'open') return;
    setSelectedOptionId(-1);
    setIsActivePurchaseBtn(state === 'open' ? false : true);
    setIsActiveOptionSelector(state === 'open' ? true : false);
  };

  const handlePurchaseBtnClick = () => {
    if (!isActivePurchaseBtn && isActiveOptionSelector && selectedOptionId === -1) {
      return;
    }
    if (selectedOptionId !== -1) {
      window.alert('베타 버전에서는 구매하실 수 없습니다.');
      return;
    }
    hanleSelector('open');
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
    <S.ItemsLayout>
      <S.PaddedItemThumbnail
        imageUrl={imageUrl}
        brand={brandInfo.name}
        itemName={itemName}
        discountRate={discountRate}
        minSellingPrice={minSellingPrice}
        originalPrice={originalPrice}
      />
      {brandInfo.info && (
        <TextsSection sectionTitle="브랜드 별 유의사항" texts={brandCautionList} />
      )}
      {brandInfo.conCategory1.info && (
        <TextsSection sectionTitle="유의사항" texts={itemCautionList} />
      )}
      {warning && <TextsSection sectionTitle="환불규정" texts={refundRuleList} />}
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
          <S.NotFullBackDrop onClick={() => hanleSelector('close')} />
          <OptionSelector
            closeSelector={() => hanleSelector('close')}
            options={optionsWithDiscountRate}
            handleSelect={handleOptionSelectorClick}
          />
        </>
      )}
      {selectedOptionId !== -1 && (
        <SelectedOptionViewer
          openSelector={() => {
            hanleSelector('open');
          }}
          option={getSelectedOptionText(selectedOptionId)}
        />
      )}
    </S.ItemsLayout>
  );
};

Items.getLayout = function getLayout(page: ReactNode) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { conItemId } = context.query;

  const data = typeof conItemId === 'string' ? await get.items(conItemId) : null;

  return { props: { data: data?.conItem } };
};

export default Items;
