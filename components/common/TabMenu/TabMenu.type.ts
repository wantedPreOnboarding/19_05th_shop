import { QaItems } from 'apis/models/Contacts.type';
import React from 'react';

interface MenuDate {
  id: number;
  name?: string;
  discountRate?: number;
  imageUrl?: string;
  key?: string;
  QaTypes?: QaItems[];
}

export default interface TabMenuProps {
  tabType: 'category' | 'faq';
  qaType?: number;
  menuData: MenuDate[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  setSelectType?: React.Dispatch<React.SetStateAction<number>>;
  selectedMenu?: number | string;
}
