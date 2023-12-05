import React from 'react';
import { clsxMerge } from '../../shared/utils';

export const Button = (props) => {
  const { variant = 'default', children, className, ...buttonProps } = props;

  const buttonVariants = {
    default: 'text-bluePrimary',
    brand: 'bg-bluePrimary text-white',
    'brand-inverted': 'border border-bluePrimary text-bluePrimary',
  };

  return (
    <button
      className={clsxMerge(buttonVariants[variant], 'rounded', className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
