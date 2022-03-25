import { Option, ConItem } from 'apis/models/Item.type';
export default interface OptionSelectorProps {
  options: (Option & Pick<ConItem, 'discountRate'> & { id: number })[];
  // eslint-disable-next-line no-unused-vars
  handleSelect: (id: number) => void;
  closeSelector: () => void;
}
