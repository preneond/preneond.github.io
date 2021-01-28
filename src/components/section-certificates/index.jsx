import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCertificates = ({ certificates }) => {
  if (!certificates.length) return null;

  return (
    <Section title="Certificates">
      {certificates.map((item) => (
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

export default SectionCertificates;
