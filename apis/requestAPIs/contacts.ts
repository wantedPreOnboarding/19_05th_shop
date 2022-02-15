import requests from '../core';
import { QaItems, ContactType } from '../models/Contacts.type';
import { URL } from '../consts';

export const get = {
  ContactType: () => requests.get<ContactType>(URL.CONTACT_TYPE),
  QaPurchase: () => requests.get<QaItems>(URL.QA_PURCHASE),
  QaSale: () => requests.get<QaItems>(URL.QA_SALE),
};
