import React, { ReactElement, useState } from 'react';
import { ContactList } from './innerPaths';
import { TabMenu } from 'components/common';
import * as S from './index.styled';
import { ContactsProps } from './index.type';

const Contacts = ({ data: { contactType, qaPurchase, qaSale } }: ContactsProps): ReactElement => {
  const [selectType, setSelectType] = useState<number>(1);

  return (
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
  );
};
export default Contacts;
