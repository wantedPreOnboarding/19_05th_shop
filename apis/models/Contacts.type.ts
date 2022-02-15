export interface ContactsAPIType {
  qas: QaItems[];
  qaTypes: ContactType[];
}

export interface ContactType {
  id: number;
  name: string;
  key: string;
  qaTypes: ContactType[];
}

export interface QaItems {
  id: number;
  question: string;
  answer: string;
  qas: QaItems[];
  qaTypes: ContactType[];
}
