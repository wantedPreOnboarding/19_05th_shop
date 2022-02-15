import requests from '../core';
import { QaItemsAPIType, ContactsAPIType } from '../models/Contacts.type';
import { URL } from '../consts';

export const get = {
  ContactType: () => requests.get<ContactsAPIType>(URL.CONTACT_TYPE),
  QaPurchase: () => requests.get<QaItemsAPIType>(URL.QA_PURCHASE),
  QaSale: () => requests.get<QaItemsAPIType>(URL.QA_SALE),
};
