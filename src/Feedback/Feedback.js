import React from 'react';
import styles from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

// const optionState = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        countTotalFeedback: 0,
        countPositiveFeedbackPercentage: 0,
        visible: false,
    }

    countTotalFeedback = () => {
        this.setState(prevState => ({
            countTotalFeedback: prevState.good+prevState.neutral+prevState.bad,
        }));
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            countPositiveFeedbackPercentage: Math.round(prevState.good/prevState.countTotalFeedback*100),
        }));
    }

    incrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.setState({ visible: true });
    };

    incrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.setState({ visible: true });
    };
    
    incrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.setState({ visible: true });
    };

    
    
    
    render() {
        return (
            <div className={styles.feedback}>
                <h2 className={styles.title}>Please leave feedback</h2>

                <FeedbackOptions
                    onGood={this.incrementGood}
                    onNeutral={this.incrementNeutral}
                    onBad={this.incrementBad} />
                
                {/* <FeedbackOptions options={optionState} onLeaveFeedback={}> */}
                
                <h2 className={styles.title}>Statistics</h2>

                {this.state.visible ?
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.state.countTotalFeedback}
                        positivePercentage={this.state.countPositiveFeedbackPercentage} />
                    : <Notification message="No feedback given" />
                }
                
            </div>
        );
    }
}

export default Feedback;