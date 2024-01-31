import { $TsFixMe } from '@/types';

export interface TreeNode {
  uniqueId: string;
  EcoSystemId?: number;
  EcoSystemName?: string;
  StockId?: string;
  StockName?: string;
  DocumentTypeId?: number;
  DocumentTypeName?: string;
  DocumentId?: number;
  name?: string;
  DocumentLocation?: string;
  DocumentDateTime?: string;
  DocumentSourceName?: string;
  DocumentSourceURL?: string;
  level: string;
  items: TreeNode[];
  status: $TsFixMe;
}
