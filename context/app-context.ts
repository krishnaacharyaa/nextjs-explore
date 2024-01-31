'use client';

import { $TsFixMe } from '@/types';
import { DocumentItemType } from '@/types/zod-to-type';
import { TreeNode } from '@/utils/types';
import React from 'react';

interface StockInfo {
  stockName: string;
  stockId: string;
}

export interface AppContextState {
  items: Array<TreeNode>;
  setItems: React.Dispatch<React.SetStateAction<any>>;
  selectedItems: DocumentItemType[];
  setSelectedItems: React.Dispatch<React.SetStateAction<DocumentItemType[]>>;
  selectedDocument: DocumentItemType | null;
  setSelectedDocument: React.Dispatch<
    React.SetStateAction<DocumentItemType | null>
  >;
  ecosystemSelected: string;
  setEcosystemSelected: React.Dispatch<React.SetStateAction<string>>;
  stockLevelSelected: StockInfo;
  setStockLevelSelected: React.Dispatch<React.SetStateAction<StockInfo>>;
}

const defaultState: AppContextState = {
  items: [],
  setItems: () => {},
  selectedItems: [],
  setSelectedItems: () => {},
  selectedDocument: null,
  setSelectedDocument: () => {},
  ecosystemSelected: '',
  setEcosystemSelected: () => {},
  stockLevelSelected: {
    stockId: '',
    stockName: '',
  },
  setStockLevelSelected: () => {},
};

export const AppContext = React.createContext<AppContextState>(defaultState);

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context == undefined) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
}
