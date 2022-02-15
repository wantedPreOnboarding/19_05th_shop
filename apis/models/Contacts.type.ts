export interface ContactsAPIType {
  qaTypes: ContactType[];
}

export interface QaItemsAPIType {
  qas: QaItems[];
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
