import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #f1f3f4;
  overflow-x: hidden;
`;

export const Box = styled.div`
  width: 375px;
  height: 107.62px;
  display: flex;
  align-items: center;
  padding: 17px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
  background: white;
  margin-bottom: 1px;
  img {
    width: 70px;
    height: 70px;
  }
`;

export const ImageBox = styled.div`
  width: 74px;
  height: 74px;
  background: #f1f3f4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuTitle = styled.section`
  font-size: 16px;
  font-weight: 600;
  padding: 17px;
  margin-bottom: 14px;
  span {
    font-weight: 500;
    font-size: 13px;
    color: #ff5757;
    display: block;
    margin-bottom: 5px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
  font-weight: 500;
`;

export const PriceBox = styled.div`
  font-size: 16px;
`;

export const BrandName = styled.span`
  color: #808080;
  font-size: 14px;
`;

export const TitleName = styled.span`
  margin: 7px 0px;
  font-size: 16px;
`;

export const DiscountPrice = styled.span`
  color: #ff5757;
`;
export const OriginalPrice = styled.span`
  color: #808080;
  font-size: 14px;
`;
