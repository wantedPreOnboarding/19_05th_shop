import { QaItems } from 'apis/models/Contacts.type';
import React from 'react';

export default interface TabMenuProps {
  tabType: 'category' | 'faq';
  qaType?: number;
  menuData: [
    {
      id: number;
      name: string;
      discountRate?: number;
      imageUrl?: string;
      key: string;
      qaTypes?: QaItems[];
    },
  ];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  setSelectType?: React.Dispatch<React.SetStateAction<number>>;
  selectedMenu?: number | string;
}
