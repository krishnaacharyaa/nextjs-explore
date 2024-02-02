import { status } from "@/constants/app-constants";
import { useAppContext } from "@/context/appContext";
import ArrowDown from "@/svg/arrow-down.svg";
import ArrowUp from "@/svg/arrow-up.svg";
import Image from "next/image";
import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function SideBarList(props) {
  const { items, compute } = props;
  const {
    ecosystemSelected,
    setEcosystemSelected,
    stockLevelSelected,
    setStockLevelSelected,
  } = useAppContext();
  const [expandedItems, setExpandedItems] = useState<number[]>(
    // Retrieve the expanded items from localStorage on component mount
    () => JSON.parse(localStorage.getItem("expandedItems")) || []
  );

  const toggleItem = (itemId: number, level: string) => {
    let newExpandedItems;
    if (expandedItems.includes(itemId)) {
      newExpandedItems = expandedItems.filter((id) => id !== itemId);
    } else if (level === "StockName" || level === "EcoSystemName") {
      newExpandedItems = [itemId];
    } else {
      newExpandedItems = [...expandedItems, itemId];
    }
    localStorage.setItem("expandedItems", JSON.stringify(newExpandedItems));
    setExpandedItems(newExpandedItems);
  };
  const isEcoSystemLevel = (item) => item.level === "EcoSystemName";
  const isStockLevel = (item) => item.level === "StockName";
  return (
    <ul className="list-none text-left pl-3">
      {items.map((item) => {
        let childList: React.ReactNode | null = null;
        const hasChildItems =
          Array.isArray(item.items) && item.items.length > 0;
        const isExpanded = expandedItems.includes(item.uniqueId);
        if (hasChildItems && isExpanded) {
          childList = <SideBarList items={item.items} compute={compute} />;
        }

        return (
          <li key={item.uniqueId} className="my-2">
            <div
              className={`${
                ecosystemSelected === item.name
                  ? "bg-sky-800 text-white hover:bg-sky-800"
                  : stockLevelSelected.stockName === item.name
                  ? "bg-sky-500 text-white hover:bg-sky-500"
                  : "text-black"
              } p-1 rounded-md flex hover:bg-sky-100`}
            >
              {/* Conditionally render Checkbox based on the level */}
              {!isEcoSystemLevel(item) && (
                <Checkbox
                  id={item.uniqueId}
                  name={item.name}
                  checked={item.status === status.checked}
                  indeterminate={item.status === status.indeterminate}
                  compute={compute}
                  onClick={() => {
                    if (item.level === "StockName") {
                      setStockLevelSelected({
                        stockName: item.name,
                        stockId: item.StockId,
                      });
                    }
                  }}
                />
              )}
              <div className="flex w-full">
                <label
                  onClick={() => {
                    handleLabelToggleClick(item);
                  }}
                  htmlFor={item.name}
                  className="flex-1"
                >
                  {item.name}
                </label>
                {hasChildItems && (
                  <button
                    className="ml-2"
                    onClick={() => {
                      handleLabelToggleClick(item);
                    }}
                  >
                    <Image
                      src={isExpanded ? ArrowDown : ArrowUp}
                      alt={isExpanded ? "[-]" : "[+]"}
                    />
                  </button>
                )}
              </div>
            </div>
            {childList}
          </li>
        );
      })}
    </ul>
  );

  function handleLabelToggleClick(item) {
    if (isEcoSystemLevel(item)) {
      setEcosystemSelected(item.name);
      setStockLevelSelected({
        stockName: item.items[0].StockName,
        stockId: item.items[0].StockId,
      });
      console.log("Selected Ecosystem" + item.name);
    }
    if (isStockLevel(item)) {
      setStockLevelSelected({
        stockName: item.name,
        stockId: item.StockId,
      });
      console.log("Selected StockLevel" + item.name);
    }
    toggleItem(item.uniqueId, item.level);
  }
}
