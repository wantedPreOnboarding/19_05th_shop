import React, { useState } from 'react';
import * as S from './ContactContents.style';

const ContactContents = () => {
  const [contentOpen, setContentOpen] = useState<boolean>(false);
  const contentOpenHandle = () => {
    setContentOpen(!contentOpen);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title onClick={contentOpenHandle}>
          <S.Q>Q.</S.Q>
          <S.Title>현금영수증(또는 세금계산서)을 발급 받고 싶어요!</S.Title>
          <S.ArrowDownSvg contentOpen={contentOpen} />
        </S.Title>
      </S.Wrapper>
      <S.ContentWrapper contentOpen={contentOpen}>
        <S.Content>
          니콘내콘은 쿠폰의 판매처로 사용 여부 및 잔액 조회가 불가능합니다. 번거로우시겠지만 해당
          내용은 방문 매장, 또는 사용처에서 확인해주시면 감사하겠습니다.
        </S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default ContactContents;
