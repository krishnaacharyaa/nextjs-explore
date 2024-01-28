import { status } from "@/constants/app-constants";
import { DocumentItemType } from "@/types/zod-to-type";
status;

export const setStatus = (root, status) => {
  root.status = status;
  if (Array.isArray(root.items)) {
    return root.items.forEach((item) => {
      setStatus(item, status);
    });
  }
};

export const computeStatus = (items) => {
  let checked = 0;
  let indeterminate = 0;

  items.forEach((item) => {
    if (item.status && item.status === status.checked) checked++;
    if (item.status && item.status === status.indeterminate) indeterminate++;
  });

  if (checked === items.length) {
    return status.checked;
  } else if (checked > 0 || indeterminate > 0) {
    return status.indeterminate;
  }
};

// Depth-first traversal
export const traverse = (root, needle, status) => {
  let uniqueId;
  let items;

  if (Array.isArray(root)) {
    items = root;
  } else {
    uniqueId = root.uniqueId;
    items = root.items;
  }

  // return if needle is found
  // we don't have to compute the status of the items if root.id === needle
  if (uniqueId === needle) {
    return setStatus(root, status);
  }

  if (!items) {
    return root;
  } else {
    items.forEach((item) => traverse(item, needle, status));
    root.status = computeStatus(items);
  }
};

export const getSelectedLeafNodes = (root) => {
  const selectedNodes: DocumentItemType[] = [];

  const traverseForSelected = (node: any) => {
    if (!Array.isArray(node.items)) {
      if (node.status === status.checked) {
        selectedNodes.push({
          uniqueId: node.uniqueId,
          name: node.name,
          level: node.level,
          DocumentId: node.DocumentId,
          Name: node.name,
          DocumentLocation: node.DocumentLocation,
          DocumentDateTime: node.DocumentDateTime,
          DocumentSourceName: node.DocumentSourceName,
          DocumentSourceURL: node.DocumentSourceURL,
        });
      }
    } else {
      node.items.forEach((item) => traverseForSelected(item));
    }
  };

  root.forEach((item) => traverseForSelected(item));

  return selectedNodes;
};
export const findStockNameById = (documentId, jsonDataFromDB) => {
  for (const ecosystem of jsonDataFromDB) {
    for (const stock of ecosystem.items) {
      for (const documentType of stock.items) {
        for (const document of documentType.items) {
          if (document.uniqueId === documentId) {
            return stock.StockName;
          }
        }
      }
    }
  }
  return null; // Return null if the document ID is not found
};
