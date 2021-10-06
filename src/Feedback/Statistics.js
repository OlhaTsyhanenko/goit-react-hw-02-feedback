
import styles from './Feedback.module.css';
import PropTypes from 'prop-types'

export default function Statistics({good,neutral,bad,total,positivePercentage}) {
    return (
         <div className={styles.statistics}>
                    <p className={styles.statistics__item}>Good: {good}</p>
                    <p className={styles.statistics__item}>Neutral: {neutral}</p>
                    <p className={styles.statistics__item}>Bad: {bad}</p>
                    <p className={styles.statistics__item}>Total: {total}</p>
                    <p className={styles.statistics__item}>Positive feedback: {positivePercentage}%</p>
                </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}