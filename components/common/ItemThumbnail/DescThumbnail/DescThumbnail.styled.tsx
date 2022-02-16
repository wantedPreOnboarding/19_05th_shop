import styled from 'styled-components';

export const DescThumbnail = styled.div`
  padding: 0px 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;

  .brand,
  .org-price {
    font-size: ${props => props.theme.fontSize.m};
    color: ${props => props.theme.colors.gray};
  }

  .item-name,
  .discount-rate,
  .min-price {
    font-size: ${props => props.theme.fontSize.l};
  }

  .discount-rate {
    color: ${props => props.theme.colors.sideMenuRed};
    padding-right: 9px;
  }

  .min-price {
    padding-right: 6px;
  }

  .org-price {
    text-decoration: line-through;
  }
`;
