import styled from 'styled-components';

export const TextsSection = styled.section`
  .section-title {
    font-size: 14px;
    color: ${props => props.theme.colors.black};
  }
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
`;

export const Texts = styled.ul`
  line-height: 22px;
  margin-top: 9.7px;
`;
