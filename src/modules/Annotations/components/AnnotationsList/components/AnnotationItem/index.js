import React from 'react';

export const AnnotationItem = (props) => {
  const { annotation } = props;
  const { user, content, date, element } = annotation;
  return (
    <div className="p-3 border-b border-borderGrey">
      <div className="flex justify-start items-center">
        <img
          className="rounded-full w-10 h-10 overflow-hidden"
          alt="user"
          src={user.profileUrl}
        />
        <span className="ml-2 text-gray-500">
          <h3>{user.name}</h3>
          <p>{element}</p>
        </span>
      </div>
      <div className="mt-2">
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
};
