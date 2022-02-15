import React from 'react';
import ContactContents from '../ContactContents/ContactContents';
import * as S from './ContactList.style';

const ContactList = () => {
  return (
    <S.Wrapper>
      <S.Ul>
        <S.Li>
          <ContactContents />
        </S.Li>
      </S.Ul>
    </S.Wrapper>
  );
};

export default ContactList;
