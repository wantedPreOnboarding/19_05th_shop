export interface ContactsAPIType {
  qas: QaItems[];
  qaTypes: ContactType[];
}

export interface QaItems {
  id: number;
  name: string;
  key: string;
}

export interface ContactType {
  id: number;
  question: string;
  answer: string;
}
