import React from 'react';
import { AppLayout } from 'components/common';
import { SERVICE_CENTER } from 'consts/constants';
import * as S from './contacts.style';
const Contacts = () => {
  return (
    <AppLayout title={SERVICE_CENTER} backPath="/">
      Categories
    </AppLayout>
  );
};
export default Contacts;
