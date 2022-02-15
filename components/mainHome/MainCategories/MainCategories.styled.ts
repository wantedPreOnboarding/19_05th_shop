import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #f1f3f4;
  padding-top: 17px;
  padding-bottom: 12px;
`;

export const Box = styled.div`
  cursor: pointer;
  width: 112px;
  height: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11px 5px 14px 5px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
  background: white;
  margin: 1px;

  img {
    width: 43px;
    height: 43px;
    margin-bottom: 12.77px;
  }
`;
