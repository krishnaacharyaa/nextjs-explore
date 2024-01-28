"use client";
import { getSelectedLeafNodes } from "@/utils/home-utils";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  STORE_SELECTED_ECOSYSTEM,
  STORE_SELECTED_STOCK,
  STORE_SELECTION,
} from "../constants/context-constants";
import { DocumentItemType } from "../types/zod-to-type";
type StockInfo = {
  stockName: string;
  stockId: string;
};
type AppContextType = {
  items: any;
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
};
export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider({ children, initialData }) {
  const saveData = (data) => {
    localStorage.setItem(STORE_SELECTION, JSON.stringify(data));
  };
  const getSavedData = () => {
    const savedData = localStorage.getItem(STORE_SELECTION);
    return savedData ? JSON.parse(savedData) : null;
  };
  const getSavedStockLevelSelectedData = () => {
    const savedData = localStorage.getItem(STORE_SELECTED_STOCK);
    return savedData
      ? JSON.parse(localStorage.getItem(STORE_SELECTED_STOCK))
      : { stockName: "", stockId: "" };
  };

  const getSavedEcosystemSelectedData = () => {
    const savedData = localStorage.getItem(STORE_SELECTED_ECOSYSTEM);
    return savedData ? localStorage.getItem(STORE_SELECTED_ECOSYSTEM) : "";
  };

  const [items, setItems] = useState(initialData || []);
  const [selectedItems, setSelectedItems] = useState<DocumentItemType[]>([]);
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentItemType | null>(null);
  const [ecosystemSelected, setEcosystemSelected] = useState("");
  const [stockLevelSelected, setStockLevelSelected] = useState({
    stockName: "",
    stockId: "",
  });
  useEffect(() => {
    setItems(getSavedData());
    setStockLevelSelected(getSavedStockLevelSelectedData());
    setEcosystemSelected(getSavedEcosystemSelectedData());
  }, []);
  useEffect(() => {
    saveData(items);
    const selectedLeafNodes: DocumentItemType[] = getSelectedLeafNodes(items);
    setSelectedItems(selectedLeafNodes);
  }, [items]);
  useEffect(() => {
    localStorage.setItem(
      STORE_SELECTED_STOCK,
      JSON.stringify(stockLevelSelected)
    );
  }, [stockLevelSelected]);

  useEffect(() => {
    setSelectedDocument(null);
  }, [stockLevelSelected, ecosystemSelected]);
  useEffect(() => {
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
export function useAppContext() {
  const context = useContext(AppContext);
  if (context == undefined) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
}
