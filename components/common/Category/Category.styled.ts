import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex: 32% 0 0;
  justify-content: center;
  align-items: center;
  height: 94px;
  margin: 1px;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  :nth-last-of-type(3n) {
    margin-right: 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 36px;
    padding-bottom: 15px;
  }

  span {
    font-family: Apple SD Gothic Neo;
    font-size: 12px;
    font-weight: 500;
    color: #000;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-out, 0.25s ease-out;
  }
`;
