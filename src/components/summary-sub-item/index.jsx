import React from 'react';

const classes = {
  wrapper: 'mt-2 ml-2 ',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummarySubItem = ({ name, description}) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.name}>{name}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummarySubItem;
