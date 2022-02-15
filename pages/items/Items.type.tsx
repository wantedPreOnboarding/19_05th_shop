import { ConItem, Option, ConCategory2, ConCategory1 } from 'apis/models/Items.type';

export default interface ItemProps {
  data: Pick<
    ConItem,
    'id' | 'name' | 'originalPrice' | 'minSellingPrice' | 'warning' | 'imageUrl'
  > & {
    conCategory2: Omit<
      ConCategory2,
      'adminUserId' | 'priority' | 'createdAt' | 'conCategory1Id' | 'imageUrl' | 'conCategory1'
    > & {
      conCategory1: Pick<ConCategory1, 'info'>;
    };
    options: Option[];
  };
}
