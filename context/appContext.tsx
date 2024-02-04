"use client";
import { getSelectedLeafNodes } from "@/utils/home-utils";
import { getLocalStorageDataMappedWithDbData } from "@/utils/sidebar-utils";
import React, { createContext, useContext, useEffect, useState } from "react";
import { STORE_SELECTION } from "../constants/context-constants";
import { DocumentItemType } from "../types/zod-to-type";
type AppContextType = {
  items: any;
  setItems: React.Dispatch<React.SetStateAction<any>>;
  selectedItems: DocumentItemType[];
  setSelectedItems: React.Dispatch<React.SetStateAction<DocumentItemType[]>>;
};
export const AppContext = createContext<AppContextType | null>(null);
const saveData = (data) => {
  localStorage.setItem(STORE_SELECTION, JSON.stringify(data));
};
const getSavedData = () => {
  var savedData = null;
  savedData = localStorage.getItem(STORE_SELECTION)
    ? JSON.parse(localStorage.getItem(STORE_SELECTION))
    : null;
  return savedData;
};
const mapInitialData = (initialData) => {
  const localItems = getSavedData();
  return getLocalStorageDataMappedWithDbData(localItems, initialData) || [];
};
export default function AppContextProvider({ children, initialData }) {
  // const [items, setItems] = useState(mapInitialData(initialData));
  const [items, setItems] = useState(getSavedData() || initialData || []);
  const [selectedItems, setSelectedItems] = useState<DocumentItemType[]>([]);

  useEffect(() => {
    saveData(items);
    const selectedLeafNodes: DocumentItemType[] = getSelectedLeafNodes(items);
    setSelectedItems(selectedLeafNodes);
  }, [items]);
  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        selectedItems,
        setSelectedItems,
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
