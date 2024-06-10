import React from "react";

const TabsUnderlined = ({ tabs, activeTabIndex, setActiveTabIndex }) => {
  const checkIfTabActive = (i) => {
    return i === activeTabIndex
      ? "inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active"
      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-300";
  };
  const checkIfTabDisabled = (tab) => {
    return tab.isDisabled ? "cursor-not-allowed text-gray-400" : "";
  };
  return (
    <div className="text-sm font-medium text-center text-purple-500 border-b border-purple-200">
      <ul className="flex flex-wrap">
        {tabs.map((tab, i) => {
          return (
            <li key={tab.text} className="me-2">
              <button
                onClick={() => setActiveTabIndex(i)}
                disabled={tab.isDisabled}
                className={`${checkIfTabDisabled(tab)} ${checkIfTabActive(i)}`}
              >
                {tab.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabsUnderlined;
