export default interface TabMenuProps {
  tabType: 'category' | 'faq';
  menuData: {
    id?: number;
    name?: string;
    discountRate?: number;
    imageUrl?: string;
    key?: string;
  }[];
  selectedMenu?: number | string;
}
