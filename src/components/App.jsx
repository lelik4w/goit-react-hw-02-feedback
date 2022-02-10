import React from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

import initialOptions from './options.json';

export class App extends React.Component {
  state = {
    options: initialOptions,
    total: 0,
    posPercentage: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.options.reduce((prevValue, currValue) => {
          return prevValue + currValue.value;
        }, 0),
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      // find object of positive value
      const posObj = prevState.options.find(
        item => item.name.toLowerCase() === 'good'
      );
      return {
        posPercentage: (posObj.value / prevState.total) * 100,
      };
    });
  };

  clickHandler = e => {
    // find clicked element
    const currId = e.currentTarget.id;

    let newState = this.state.options.map(item => {
      if (item.id === currId) {
        item.value += 1;
      }
      return item;
    });

    this.setState({
      options: newState,
    });

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    // console.log(this.state.options);
  };

  render() {
    const { options, total, posPercentage } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.clickHandler}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={options[0].value}
              neutral={options[1].value}
              bad={options[2].value}
              total={total}
              positivePercentage={posPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
