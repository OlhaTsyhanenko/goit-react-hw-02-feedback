import { Component } from 'react';
import './App.css';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import styles from './Feedback/Feedback.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    const countPositiveFeedbackPercentage = (good * 100) / totalFeedback
    return Math.round(countPositiveFeedbackPercentage);
  }

  onLeaveFeedback = (e) => {
    const value = e.target.name;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };
        
  render() {

    const { good, neutral, bad } = this.state;
    const  total  = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);


    return (
      
      <div className={styles.feedback}>
        
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} />
          : <Notification message="No feedback given" />
          }
        </Section>
                
      </div>
    );
  }
}

export default App;
