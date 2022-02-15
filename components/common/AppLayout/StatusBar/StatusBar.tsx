import React from 'react';
import * as S from './StatusBar.styled';
import { useRouter } from 'next/router';

const StatusBar = () => {
  const router = useRouter();
  const pathName = router.pathname.split('/')[1];
  return (
    <S.FullBar>
      {pathName && pathName === 'categories' ? (
        ''
      ) : (
        <>
          <S.SettingIcons>
            <span>1:20</span>
            <S.SettingIcon
              src={`${process.env.ASSET_PATH}/location.svg`}
              width="10.54px"
              height="10.54px"
            />
          </S.SettingIcons>
          <S.SettingIcons>
            <S.SettingIcon
              src={`${process.env.ASSET_PATH}/fullBars.svg`}
              width="12px"
              height="8px"
            />
            <S.SettingIcon
              src={`${process.env.ASSET_PATH}/wifi.svg`}
              width="14.25px"
              height="10px"
            />

            <S.SettingIcon
              src={`${process.env.ASSET_PATH}/battery.svg`}
              width="20px"
              height="7.5px"
            />
          </S.SettingIcons>
        </>
      )}
    </S.FullBar>
  );
};

export default StatusBar;
