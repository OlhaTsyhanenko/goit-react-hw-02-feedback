import styles from './Feedback.module.css';
import PropTypes from 'prop-types'
import shortid from 'shortid';

export default function FeedbackOptions({options,onLeaveFeedback}) {
    return (
        <div>
            {options.map(option => (
                <button className={styles.btn} key={shortid.generate()} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
           
        </div>        
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
}
