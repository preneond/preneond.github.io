import React from 'react';

import Section from '../section';
import SummaryBigItem from '../summary-big-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;
  console.log(experience)
  return (  
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryBigItem
          key={item.name}
          name={item.name}
          position={item.position}
          period={item.period}
          link={item.link}
          description={item.description}
          subitems={item.subitems}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
