import { useState } from "react";
import GlossaryDocument from "./ThirdColumnComponent/GlossaryDocument";
import SummaryDocument from "./ThirdColumnComponent/SummaryDocumet";

function TabComponent() {
  const [mainTab, setMainTab] = useState("Document");

  const handleMainTabClick = (tab) => {
    setMainTab(tab);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="p-4 bg-white rounded-t-lg shadow-md">
        <ul className="flex items-center justify-between cursor-pointer">
          <li
            onClick={() => handleMainTabClick("Summary")}
            className={`px-4 py-2 flex-1 text-lg font-medium rounded-md ${
              mainTab === "Summary"
                ? "border-sky-800 border-b-2 text-sky-800 "
                : "border-gray-300 border-b-2 hover:bg-sky-100"
            }`}
          >
            Summary
          </li>
          <li
            onClick={() => handleMainTabClick("Glossary")}
            className={`px-4 py-2 flex-1 text-lg font-medium rounded-md ${
              mainTab === "Glossary"
                ? "border-sky-800 border-b-2 text-sky-800 "
                : "border-gray-300 border-b-2 hover:bg-sky-100"
            }`}
          >
            Glossary
          </li>
        </ul>
      </div>
      <div className="flex-1">
        {mainTab === "Summary" && (
          <div className="h-full px-4 bg-white">
            <SummaryDocument />
          </div>
        )}
        {mainTab === "Glossary" && (
          <div className="h-full px-4 bg-white">
            <GlossaryDocument />
          </div>
        )}
      </div>
    </div>
  );
}

export default TabComponent;
