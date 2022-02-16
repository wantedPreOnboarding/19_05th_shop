import * as S from './TitleBar.styled';
import { TitleBarProps } from './TitleBar.type';
import Link from 'next/link';
import { YOUCON_MYCON, SERVICE_CENTER } from 'consts/constants';
import { useRouter } from 'next/router';

const TitleBar = ({ title, sideMenuHandler }: TitleBarProps) => {
  const router = useRouter();
  return (
    <S.Wrapper title={title}>
      {title === YOUCON_MYCON ? (
        <S.LeftBtn
          src={`${process.env.ASSET_PATH}/hamburgerBtn.svg`}
          width="30px"
          height="30px"
          onClick={sideMenuHandler}
        />
      ) : title === SERVICE_CENTER ? (
        ''
      ) : (
        <S.LeftBtn
          src={`${process.env.ASSET_PATH}/back.svg`}
          width="17px"
          height="17px"
          onClick={() => router.back()}
        />
      )}
      {title && <S.PageTitle>{title}</S.PageTitle>}
      {title === SERVICE_CENTER && (
        <Link href="/">
          <S.CancleBtn src={`${process.env.ASSET_PATH}/close.svg`} width="20px" height="20px" />
        </Link>
      )}
    </S.Wrapper>
  );
};

export default TitleBar;
