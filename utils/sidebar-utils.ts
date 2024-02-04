export function createTree(data) {
  const ecosystems = {};

  data.forEach((item) => {
    const ecoId = item.EcoSystemId;
    const stockId = item.StockId;
    const docTypeId = item.DocumentTypeId;

    ecosystems[ecoId] = ecosystems[ecoId] || {
      uniqueId: ecoId,
      EcoSystemId: ecoId,
      EcoSystemName: item.EcoSystemName,
      name: item.EcoSystemName,
      level: "EcoSystemName",
      items: [],
    };

    if (stockId !== undefined) {
      const stockIndex = ecosystems[ecoId].items.findIndex(
        (stock) => stock.StockId === stockId
      );

      if (stockIndex === -1) {
        ecosystems[ecoId].items.push({
          uniqueId: parseInt(`${ecoId}${stockId}`, 10),
          StockId: stockId,
          StockName: item.StockName,
          name: item.StockName,
          level: "StockName",
          items: [],
        });
      }

      const stockItem = ecosystems[ecoId].items.find(
        (stock) => stock.StockId === stockId
      );

      if (docTypeId !== undefined) {
        const docTypeIndex = stockItem.items.findIndex(
          (docType) => docType.DocumentTypeId === docTypeId
        );

        if (docTypeIndex === -1) {
          stockItem.items.push({
            uniqueId: parseInt(`${ecoId}${stockId}${docTypeId}`, 10),
            DocumentTypeId: docTypeId,
            DocumentTypeName: item.DocumentTypeName,
            name: item.DocumentTypeName,
            level: "DocumentTypeName",
            items: [],
          });
        }

        const docTypeItem = stockItem.items.find(
          (docType) => docType.DocumentTypeId === docTypeId
        );

        docTypeItem.items.push({
          uniqueId: parseInt(
            `${ecoId}${stockId}${docTypeId}${item.DocumentId}`,
            10
          ),
          DocumentId: item.DocumentId,
          name: item.Name,
          level: "Document",
          Name: item.Name,
          DocumentLocation: item.DocumentLocation,
          DocumentDateTime: item.DocumentDateTime,
          DocumentSourceName: item.DocumentSourceName,
          DocumentSourceURL: item.DocumentSourceURL,
        });
      }
    }
  });

  return Object.values(ecosystems);
}
export function getLocalStorageDataMappedWithDbData(
  localItems,
  dbItems
): any[] {
  console.log("localitems");
  console.log(localItems);
  console.log("dbitems");
  console.log(dbItems);

  if (localItems == null) return dbItems;
  const mapStatus = (local, db) => {
    if (local.status !== undefined) {
      db.status = local.status;
    }

    if (local.items && local.items.length > 0) {
      for (let i = 0; i < local.items.length; i++) {
        const localChild = local.items[i];
        const dbChild = db.items.find(
          (item) => item.uniqueId === localChild.uniqueId
        );

        if (dbChild) {
          mapStatus(localChild, dbChild);
        }
      }
    }
  };

  for (let i = 0; i < localItems.length; i++) {
    const localItem = localItems[i];
    const dbItem = dbItems.find((item) => item.uniqueId === localItem.uniqueId);

    if (dbItem) {
      mapStatus(localItem, dbItem);
    }
  }
  console.log("dbItems");
  console.log(dbItems);
  return dbItems;
}
