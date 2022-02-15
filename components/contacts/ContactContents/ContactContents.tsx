import React, { useState } from 'react';
import * as S from './ContactContents.style';
import ContactContentsProps from './ContactContents.type';

const ContactContents = ({ items }: ContactContentsProps) => {
  const [contentOpen, setContentOpen] = useState<boolean>(false);
  const contentOpenHandle = () => {
    setContentOpen(!contentOpen);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title onClick={contentOpenHandle}>
          <S.Q>Q.</S.Q>
          <S.Title>{items.question}</S.Title>
          <S.ArrowDownSvg contentOpen={contentOpen} />
        </S.Title>
      </S.Wrapper>
      <S.ContentWrapper contentOpen={contentOpen}>
        <S.Content>{items.answer}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default ContactContents;
