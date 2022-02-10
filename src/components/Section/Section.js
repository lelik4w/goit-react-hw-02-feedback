import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title ?? 'Default title'}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
