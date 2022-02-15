import React from 'react';
import { AppLayout, TabMenu } from 'components/common';

import { SERVICE_CENTER } from 'consts/constants';
import * as S from './contacts.style';
import ContactContents from 'components/contacts/ContactContents/ContactContents';
const Contacts = () => {
  return (
    <AppLayout title={SERVICE_CENTER} backPath="/">
      <S.Information>
        <S.Section>
          <S.H1>상담시간 안내</S.H1>
          <S.Content>평일 10:00 - 18:00</S.Content>
          <S.Content time>점심시간 12:30 - 13:30 / 토 · 일 · 공휴일 휴무</S.Content>
        </S.Section>
      </S.Information>

      <S.Divider />

      <S.Question>
        <S.H1>자주 묻는 질문</S.H1>
        <TabMenu tabType="faq" menuData={[{ name: '구매' }, { name: '판매', id: 2 }]} />
      </S.Question>

      <S.Divider />
      <ContactContents />
    </AppLayout>
  );
};
export default Contacts;
