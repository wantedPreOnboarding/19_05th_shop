import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import * as S from './TextsSection.styled';
import TextsSectionProps from './TextsSection.type';

const TextsSection = ({ sectionTitle, texts }: SCProps<TextsSectionProps>): ReactElement => (
  <S.TextsSection>
    <h3 className="section-title">{sectionTitle}</h3>
    <S.Texts>
      {texts.map(({ id, text }) => (
        <li key={id}>· {text}</li>
      ))}
    </S.Texts>
  </S.TextsSection>
);
export default TextsSection;
