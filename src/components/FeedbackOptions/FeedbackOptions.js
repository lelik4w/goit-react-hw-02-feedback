import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(({ id, name }) => (
        <button key={id} id={id} type="button" onClick={onLeaveFeedback}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
