import React, { useState, useEffect } from 'react';
import { AppLayout, TabMenu } from 'components/common';
import { ContactList } from 'components/contacts';
import { get } from 'apis/requestAPIs/contacts';
import { ContactType, QaItems, ContactsAPIType } from 'apis/models/Contacts.type';
import * as S from './contacts.style';

import { SERVICE_CENTER } from 'consts/constants';
const Contacts = () => {
  const [contactType, setContactType] = useState<ContactType>();
  const [qaPurchase, setQaPurchase] = useState<QaItems>([]);
  const [qaSale, setQaSale] = useState<QaItems>([]);
  const [selectType, setSelectType] = useState<number>(1);

  useEffect(() => {
    get
      .ContactType()
      .then(res => setContactType(res))
      .catch(e => console.error(e));
    get
      .QaPurchase()
      .then(res => setQaPurchase(res.qas))
      .catch(e => console.error(e));
    get
      .QaSale()
      .then(res => setQaSale(res.qas))
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    console.log(qaSale);
  }, [contactType, qaPurchase, qaSale]);

  return (
    <AppLayout title={SERVICE_CENTER} backPath="/">
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
          <TabMenu tabType="faq" menuData={[]} />
        </S.Question>

        <S.Divider />

        <ContactList selectType={selectType} qaPurchase={qaPurchase} qaSale={qaSale} />
      </S.Container>
    </AppLayout>
  );
};
export default Contacts;
