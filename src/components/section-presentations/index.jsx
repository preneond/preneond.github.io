import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionPresentations = ({ presentations }) => {
  if (!presentations.length) return null;

  return (
    <Section title="Presentations">
      {presentations.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionPresentations;
