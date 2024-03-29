import { status } from "@/constants/app-constants";
import { useAppContext } from "@/context/appContext";
import ArrowDown from "@/svg/arrow-down.svg";
import ArrowUp from "@/svg/arrow-up.svg";
import Image from "next/image";
import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function SideBarList(props) {
  const { items, compute } = props;
  const {} = useAppContext();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const toggleItem = (itemId: number, level: string) => {
    let newExpandedItems;
    if (expandedItems.includes(itemId)) {
      newExpandedItems = expandedItems.filter((id) => id !== itemId);
    } else {
      newExpandedItems = [...expandedItems, itemId];
    }
    setExpandedItems(newExpandedItems);
  };
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
            <div className="flex">
              <Checkbox
                id={item.uniqueId}
                name={item.name}
                checked={item.status === status.checked}
                indeterminate={item.status === status.indeterminate}
                compute={compute}
                onClick={() => {}}
              />
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
    toggleItem(item.uniqueId, item.level);
  }
}
