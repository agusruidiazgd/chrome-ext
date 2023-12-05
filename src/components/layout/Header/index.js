/*global chrome*/
import React, { useEffect, useState } from 'react';

export const Header = () => {
  const site = window.location.href;
  const [currentTab, setCurrentTab] = useState(null);

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let tabs = await chrome.tabs.query(queryOptions);
    return tabs[0].url;
  }

  useEffect(() => {
    getCurrentTab().then((tab) => {
      setCurrentTab(tab);
    });
  }, []);

  chrome?.tabs?.onUpdated?.addListener((tabId, changeInfo, tab) => {
    console.log(changeInfo.status);
    if (changeInfo.status == 'complete') {
      console.log('tabId', tabId, 'changeInfo', changeInfo, 'tab', tab);
    }
  });

  console.log('currentTab', currentTab);

  return (
    <div className="h-12 p-3 flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-7 w-7 rounded bg-bluePrimary" />
        <h2 className="ml-2 text-bluePrimary font-bold">Igeneris</h2>
      </div>
      <button className="text-bluePrimary text-base">ⓧ</button>
    </div>
  );
};
