import { Header, Tabs, TextEditor } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AnnotationsList,
  AnnotationsTabs,
  CreateAnnotationModal,
} from './modules/Annotations';
import './App.css';
import { useState } from 'react';

function App() {
  const [openCreateAnnotationModal, setOpenCreateAnnotationModal] =
    useState(false);

  console.log('openCreateAnnotationModal', openCreateAnnotationModal);

  const onOpenCreateAnnotationModalHandler = () => {
    setOpenCreateAnnotationModal((prev) => !prev);
  };

  const annotations = [
    {
      user: {
        name: 'John',
        profileUrl: `https://avatars.dicebear.com/api/open-peeps/avatar-${Math.random()}.svg?backgroundColor=b6e3f4`,
      },
      element: 'div',
      date: new Date('5-07-2023'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt',
    },
    {
      user: {
        name: 'Barbie',
        profileUrl: `https://avatars.dicebear.com/api/open-peeps/avatar-${Math.random()}.svg?backgroundColor=b6e3f4`,
      },
      element: 'url element',
      date: new Date('5-07-2023'),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt',
    },
  ];

  return (
    <main className="w-[300px] h-[500px]">
      <Header />
      <AnnotationsTabs
        annotations={annotations}
        onOpenCreateAnnotationModalHandler={onOpenCreateAnnotationModalHandler}
      />
      {openCreateAnnotationModal && (
        <CreateAnnotationModal
          onOpenCreateAnnotationModalHandler={
            onOpenCreateAnnotationModalHandler
          }
        />
      )}
    </main>
  );
}

export default App;
