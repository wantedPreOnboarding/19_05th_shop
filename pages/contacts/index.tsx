import React from 'react';
import Contacts from 'components/contacts';
import { AppLayout } from 'components/common';
import { get } from 'apis/requestAPIs/contacts';
import { ContactsAPIType } from 'components/contacts/index.type';
import { SERVICE_CENTER } from 'consts/constants';

const ContactsPage = ({ contactType, qaPurchase, qaSale }: ContactsAPIType) => {
  return (
    <AppLayout title={SERVICE_CENTER}>
      <Contacts data={{ contactType, qaPurchase, qaSale }} />
    </AppLayout>
  );
};

export async function getStaticProps() {
  const contactType = await get.ContactType();
  const qaPurchase = await get.QaPurchase();
  const qaSale = await get.QaSale();

  return {
    props: {
      contactType: contactType.qaTypes,
      qaPurchase: qaPurchase.qas,
      qaSale: qaSale.qas,
    },
  };
}

export default ContactsPage;
