import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        <label>Good:</label> {good}
      </p>
      <p>
        <label>Neutral:</label> {neutral}
      </p>
      <p>
        <label>Bad:</label> {bad}
      </p>
      <p>
        <label>Total:</label> {total}
      </p>
      <p>
        <label>Positive feedback:</label> {positivePercentage.toFixed(2)}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
