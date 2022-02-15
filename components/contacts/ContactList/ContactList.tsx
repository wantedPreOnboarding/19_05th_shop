import React from 'react';
import ContactContents from '../ContactContents/ContactContents';
import * as S from './ContactList.style';
import ContactListProps from './ContactList.type';

const ContactList = ({ selectType, qaPurchase, qaSale }: ContactListProps) => {
  return (
    <S.Wrapper>
      <S.Ul>
        {selectType === 1 && (
          <S.Li>
            {qaPurchase?.map(items => (
              <ContactContents key={items.id} items={items} />
            ))}
          </S.Li>
        )}
        {selectType === 2 && (
          <S.Li>
            {qaSale?.map(items => (
              <ContactContents key={items.id} items={items} />
            ))}
          </S.Li>
        )}
      </S.Ul>
    </S.Wrapper>
  );
};

export default ContactList;
