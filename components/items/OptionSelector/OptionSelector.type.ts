import { Option, ConItem } from 'apis/models/Items.type';
export default interface OptionSelectorProps {
  options: (Option & Pick<ConItem, 'discountRate'> & { id: number })[];
  handleSelect: (id: number) => void;
  closeSelector: () => void;
}
