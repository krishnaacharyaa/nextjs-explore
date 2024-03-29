"use client";
import { useAppContext } from "@/context/appContext";
import { traverse } from "../utils/home-utils";
import SideBarList from "./FirstColumn";

export default function Home() {
  const { items, setItems } = useAppContext();

  const compute = (checkboxId, status) => {
    traverse(items, checkboxId, status);
    setItems(items.slice());
  };
  return (
    <div className="App w-full flex">
      <div className="w-3/12">
        <SideBarList items={items} compute={compute} />
      </div>
    </div>
  );
}
