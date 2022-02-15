import React from 'react';
import Link from 'next/link';
import { SideMenuProps } from './SideMenu.type';
import * as S from './SideMenu.style';

const SideMenu = ({ sideMenuHandle, openSideMenu }: SideMenuProps) => {
  return (
    <S.MenuContainer openSideMenu={openSideMenu}>
      <S.Nav>
        <S.CloseBtn>
          <S.CloseSvg onClick={sideMenuHandle} />
        </S.CloseBtn>
      </S.Nav>
      <S.Section>
        <S.SectionWrapper>
          <S.SectionMyMoney>
            <S.Flex color="red">
              <S.FlexItem>로그인이 필요합니다</S.FlexItem>
              <S.FlexItem>
                <S.ArrowSvg />
              </S.FlexItem>
            </S.Flex>
          </S.SectionMyMoney>
          <S.SectionMyMoneyHistory>
            <S.NiconMoneyHistoryImg />
            <span>니콘머니 내역</span>
          </S.SectionMyMoneyHistory>
          <S.SectionMyMoneyHistory>
            <S.PurchaseHistoryImg />
            <span>구매 내역</span>
          </S.SectionMyMoneyHistory>
        </S.SectionWrapper>
      </S.Section>
      <S.Divider />
      <S.Flex padding>
        <S.FlexItem>기프트콘 판매하기</S.FlexItem>
        <S.FlexItem>
          <S.ArrowSvg />
        </S.FlexItem>
      </S.Flex>
      <S.Divider />
      <S.Ol>
        <S.Li>
          <Link href="/contacts">
            <a>
              <S.Flex padding>
                <S.FlexItem>고객센터</S.FlexItem>
                <S.FlexItem>
                  <S.ArrowSvg />
                </S.FlexItem>
              </S.Flex>
            </a>
          </Link>
        </S.Li>
        <S.Li>
          <S.Flex padding>
            <S.FlexItem>프로모션 코드 입력</S.FlexItem>
            <S.FlexItem>
              <S.ArrowSvg />
            </S.FlexItem>
          </S.Flex>
        </S.Li>
        <S.Li>
          <S.Flex padding>
            <S.FlexItem>버전 정보</S.FlexItem>
            <S.FlexItem>1.0</S.FlexItem>
          </S.Flex>
        </S.Li>
      </S.Ol>
      <S.LoginWrapper>
        <S.Login>로그인</S.Login>
      </S.LoginWrapper>
    </S.MenuContainer>
  );
};

export default SideMenu;
