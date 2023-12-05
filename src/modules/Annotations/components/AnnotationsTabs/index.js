import React, { useCallback } from 'react';
import { Button, Tabs } from '../../../../components';
import { AnnotationsList } from '../AnnotationsList';

export const AnnotationsTabs = (props) => {
  const { annotations, onOpenCreateAnnotationModalHandler } = props;
  const tabs = [
    {
      label: 'This site',
      value: 'tab1',
      children: <AnnotationsList annotations={[]} />,
    },
    {
      label: 'All',
      value: 'tab2',
      children: <AnnotationsList annotations={annotations} />,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
      <Button
        type="button"
        onClick={onOpenCreateAnnotationModalHandler}
        variant="brand"
        className="fixed bottom-4 right-4 w-8 h-8 flex justify-center items-center rounded-full"
      >
        +
      </Button>
    </div>
  );
};
