export interface ContactsAPIType {
  contactType: ContactType[];
  qaPurchase: QaItems[];
  qaSale: QaItems[];
}

export interface ContactType {
  id: number;
  name: string;
  key: string;
}

export interface QaItems {
  id: number;
  question: string;
  answer: string;
}
