import { QaItems } from 'apis/models/Contacts.type';

export default interface ContactListProps {
  selectType: number;
  qaPurchase?: QaItems[];
  qaSale?: QaItems[];
}
