import React, { useState, useEffect } from 'react';
import { AppLayout, TabMenu } from 'components/common';
import { ContactList } from 'components/contacts';
import { get } from 'apis/requestAPIs/contacts';
import { ContactsAPIType } from './index.type';
import * as S from 'components/contacts/Contacts.style';

import { SERVICE_CENTER } from 'consts/constants';
const Contacts = ({ contactType, qaPurchase, qaSale }: ContactsAPIType) => {
  const [selectType, setSelectType] = useState<number>(1);

  return (
    <AppLayout title={SERVICE_CENTER}>
      <S.Container>
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
          <TabMenu
            tabType="faq"
            menuData={contactType}
            qaType={selectType}
            setSelectType={setSelectType}
          />
        </S.Question>

        <S.Divider />

        <ContactList selectType={selectType} qaPurchase={qaPurchase} qaSale={qaSale} />
      </S.Container>
    </AppLayout>
  );
};

export async function getStaticProps() {
  const contactType = await get.ContactType();
  const qaPurchase = await get.QaPurchase();
  const qaSale = await get.QaSale();

  return {
    props: {
      contactType: contactType.qaTypes,
      qaPurchase: qaPurchase.qas,
      qaSale: qaSale.qas,
    },
  };
}

export default Contacts;
