import React from 'react';
import { Button } from '../../../../components';

export const CreateAnnotationModal = (props) => {
  const { onOpenCreateAnnotationModalHandler } = props;
  return (
    <section className="fixed bottom-0 left-0 right-0 h-[450px] bg-backgroundColor px-3">
      <header>
        <Button
          onClick={onOpenCreateAnnotationModalHandler}
          className="text-base"
        >
          ←
        </Button>
      </header>
      <main className="h-[95%]">
        <form className="h-full flex flex-col justify-between">
          <fieldset className="mt-2 flex flex-col justify-between">
            <label className="mb-2 text-bluePrimary font-bold">
              Write your note
            </label>
            <textarea className="border border-borderGrey rounded h-[200px]" />
          </fieldset>
          <Button variant="brand" className="py-2 mb-3">
            <p>Leave note</p>
          </Button>
        </form>
      </main>
    </section>
  );
};
