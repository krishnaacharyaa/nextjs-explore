import { UserDataCollection } from '@/types/user-data';
import { TreeNode } from './types';

export function createTree(data: UserDataCollection) {
  const ecosystems: { [key: number]: TreeNode } = {};

  data.forEach((item) => {
    const ecoId = item.EcoSystemId;
    const stockId = item.StockId;
    const docTypeId = item.DocumentTypeId;

    ecosystems[ecoId];

    ecosystems[ecoId] = ecosystems[ecoId] || {
      uniqueId: ecoId,
      EcoSystemId: ecoId,
      EcoSystemName: item.EcoSystemName,
      name: item.EcoSystemName,
      level: 'EcoSystemName',
      items: [],
    };

    const stockIndex = ecosystems[ecoId].items.findIndex(
      (stock) => stock.StockId === stockId
    );

    if (stockIndex === -1) {
      ecosystems[ecoId].items.push({
        uniqueId: parseInt(`${ecoId}${stockId}`, 10),
        StockId: stockId,
        StockName: item.StockName,
        name: item.StockName,
        level: 'StockName',
        items: [],
      });
    }

    const stockItem = ecosystems[ecoId].items.find(
      (stock) => stock.StockId === stockId
    )!;

    const docTypeIndex = stockItem.items.findIndex(
      (docType) => docType.DocumentTypeId === docTypeId
    );

    if (docTypeIndex === -1) {
      stockItem.items.push({
        uniqueId: parseInt(`${ecoId}${stockId}${docTypeId}`, 10),
        DocumentTypeId: docTypeId,
        DocumentTypeName: item.DocumentTypeName,
        name: item.DocumentTypeName,
        level: 'DocumentTypeName',
        items: [],
      });
    }

    const docTypeItem = stockItem.items.find(
      (docType) => docType.DocumentTypeId === docTypeId
    )!;

    docTypeItem.items.push({
      uniqueId: parseInt(
        `${ecoId}${stockId}${docTypeId}${item.DocumentId}`,
        10
      ),
      DocumentId: item.DocumentId,
      name: item.Name,
      level: 'Document',
      // name: item.Name,
      DocumentLocation: item.DocumentLocation,
      DocumentDateTime: item.DocumentDateTime,
      DocumentSourceName: item.DocumentSourceName,
      DocumentSourceURL: item.DocumentSourceURL,
      items: [], // No need for further nesting
    });
  });

  return Object.values(ecosystems);
}
