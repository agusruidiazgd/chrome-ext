import React from 'react';
import * as RxTabs from '@radix-ui/react-tabs';

export const Tabs = (props) => {
  const { tabs } = props;
  return (
    <RxTabs.Root className="flex flex-col" defaultValue="tab1">
      <RxTabs.List
        className="flex border-b border-borderGrey"
        aria-label="Manage your account"
      >
        {tabs.map((tab, index) => (
          <RxTabs.Trigger
            key={`${tab.value}-${index}`}
            className="px-5 pb-2 flex justify-center items-center data-[state=active]:text-bluePrimary data-[state=active]:border-b data-[state=active]:border-bluePrimary data-[state=active]:font-bold"
            value={tab.value}
          >
            {tab.label}
          </RxTabs.Trigger>
        ))}
      </RxTabs.List>
      {tabs.map((tab, index) => (
        <RxTabs.Content key={`${tab.value}-${index}`} value={tab.value}>
          {tab.children}
        </RxTabs.Content>
      ))}
    </RxTabs.Root>
  );
};
