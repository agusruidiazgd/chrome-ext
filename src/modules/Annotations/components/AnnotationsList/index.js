import React from 'react';
import isEmpty from 'lodash.isempty';
import { AnnotationItem } from './components';

export const AnnotationsList = (props) => {
  const { annotations } = props;

  if (isEmpty(annotations)) {
    return (
      <section className="relative flex justify-center items-center w-full h-[400px]">
        <h2>Looks that you don't have any annotations... yet!</h2>
      </section>
    );
  }

  return (
    <section>
      {annotations.map((annotation) => (
        <AnnotationItem annotation={annotation} />
      ))}
    </section>
  );
};
