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
  level: TreeNodeLevel;
  items: TreeNode[];
  status: $TsFixMe;
}

export enum TreeNodeLevel {
  ECO_SYSTEM_NAME = 'EcoSystemName',
  STOCK_NAME = 'StockName',
  DOCUMENT_TYPE_NAME = 'DocumentTypeName',
  Document = 'Document',
}
