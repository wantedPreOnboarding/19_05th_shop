import { Option, ConItem } from 'apis/models/Items.type';

export default interface OptionSelectorProps {
  options: (Option & Pick<ConItem, 'discountRate'>)[];
}
