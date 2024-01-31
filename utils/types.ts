export interface TreeNode {
  uniqueId: number;
  EcoSystemId?: number;
  EcoSystemName?: string;
  StockId?: number;
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
}
