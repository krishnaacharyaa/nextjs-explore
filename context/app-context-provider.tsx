'use client';

import React from 'react';
import {
  STORE_SELECTED_ECOSYSTEM,
  STORE_SELECTED_STOCK,
  STORE_SELECTION,
} from '@/constants/context-constants';
import { AppContext } from './app-context';
import { DocumentItemType } from '@/types/zod-to-type';
import { getSelectedLeafNodes } from '@/utils/home-utils';
import { TreeNode } from '@/utils/types';

interface Props {
  children: React.ReactNode;
  initialData: Array<TreeNode>;
}

const getSavedData = () => {
  const DEFAULT_SAVED_DATA = null;
  if (typeof window === undefined) {
    return DEFAULT_SAVED_DATA;
  }
  const selectedStore = localStorage.getItem(STORE_SELECTION);
  return selectedStore ? JSON.parse(selectedStore) : DEFAULT_SAVED_DATA;
};

const getSavedEcosystemSelectedData = () => {
  if (typeof window != undefined) {
    return localStorage.getItem(STORE_SELECTED_ECOSYSTEM)
      ? localStorage.getItem(STORE_SELECTED_ECOSYSTEM)
      : '';
  }
  return '';
};

const saveData = (data: Array<TreeNode>) => {
  if (typeof window != undefined) {
    localStorage.setItem(STORE_SELECTION, JSON.stringify(data));
  }
};

const getSavedStockLevelSelectedData = () => {
  const DEFAULT_SELECTED_STOCK = { stockName: '', stockId: '' };
  if (typeof window === undefined) {
    return DEFAULT_SELECTED_STOCK;
  }
  const selectedStock = localStorage.getItem(STORE_SELECTED_STOCK);
  return selectedStock ? JSON.parse(selectedStock) : DEFAULT_SELECTED_STOCK;
};

export function AppContextProvider({ children, initialData }: Props) {
  const [items, setItems] = React.useState<Array<TreeNode>>(
    () => getSavedData() || initialData || []
  );
  const [selectedItems, setSelectedItems] = React.useState<DocumentItemType[]>(
    []
  );
  const [selectedDocument, setSelectedDocument] =
    React.useState<DocumentItemType | null>(null);
  const [ecosystemSelected, setEcosystemSelected] = React.useState(
    () => getSavedEcosystemSelectedData() ?? ''
  );
  const [stockLevelSelected, setStockLevelSelected] = React.useState(
    () =>
      getSavedStockLevelSelectedData() || {
        stockName: '',
        stockId: '',
      }
  );

  // React.useEffect(() => {
  // 	setItems(getSavedData());
  // 	setStockLevelSelected(getSavedStockLevelSelectedData());
  // 	setEcosystemSelected(getSavedEcosystemSelectedData());
  // }, []);
  React.useEffect(() => {
    saveData(items);
    const selectedLeafNodes: DocumentItemType[] = getSelectedLeafNodes(items);
    setSelectedItems(selectedLeafNodes);
  }, [items]);

  React.useEffect(() => {
    localStorage.setItem(
      STORE_SELECTED_STOCK,
      JSON.stringify(stockLevelSelected)
    );
  }, [stockLevelSelected]);

  React.useEffect(() => {
    setSelectedDocument(null);
  }, [stockLevelSelected, ecosystemSelected]);

  React.useEffect(() => {
    localStorage.setItem(STORE_SELECTED_ECOSYSTEM, ecosystemSelected);
  }, [ecosystemSelected]);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        selectedItems,
        setSelectedItems,
        selectedDocument,
        setSelectedDocument,
        ecosystemSelected,
        setEcosystemSelected,
        stockLevelSelected,
        setStockLevelSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
