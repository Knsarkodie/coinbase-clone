import React from 'react';

const Card = ({
  children,
  className = '',
  padding = 'normal',
  shadow = 'normal',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200';

  const paddings = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8'
  };

  const shadows = {
    none: '',
    small: 'shadow-sm',
    normal: 'shadow',
    large: 'shadow-lg'
  };

  const classes = `${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;