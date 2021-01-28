import { Link } from 'gatsby';
import React from 'react';

import SummarySubItem from '../summary-sub-item';

const classes = {
  wrapper: 'mb-6',
  title: 'font-semibold text-gray-900 pb-1',
  subitem_title: 'text-sm font-light',
  subtitle: 'text-lg text-gray-600 font-light',
  period: 'text-sm italic text-gray-500 font-light',
  description: 'text-sm text-gray-600 font-light',
};

const SummaryBigItem = ({ name, position, period, description, subitems, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }
  let subElements;
  if (subitems != null){
    subElements = subitems.map((subitem) => (
        <SummarySubItem
        key={subitem.name}
        name={subitem.name}
        description={subitem.description}
        />
        ))
    subElements = (<div className={classes.subitem_title}>
      <p>• Projects:</p>
      {subElements}
      </div>)
  } else {
    subElements = ''
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.title} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.subtitle}>{position}</p>
      <p className={classes.period}>{period}</p>
      <p className={classes.description}>{description}</p>
      {subElements}
    </div>
  );
};

export default SummaryBigItem;
