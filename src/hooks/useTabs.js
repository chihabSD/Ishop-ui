import { useState } from "react";

const useTabs = () => {
  const [currentMenuTab, setCurrentMenuTab] = useState(0);
  const [currentSettingTab, setCurrentSettingTab] = useState(0);
  const handleCurrentSettingTab = (id) => {
    setCurrentSettingTab(id);
  };

  const handleCurrentTab = (id) => {
    setCurrentMenuTab(id);
  };
  return {
    handleCurrentSettingTab,
    handleCurrentTab,
    currentMenuTab,
    currentSettingTab,
  };
};

export { useTabs };
