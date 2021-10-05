
import styles from './Feedback.module.css';

export default function Statistics({good,neutral,bad,total,positivePercentage}) {
    return (
         <div className={styles.statistics}>
                    <p className={styles.statistics__item}>Good: {good}</p>
                    <p className={styles.statistics__item}>Neutral: {neutral}</p>
                    <p className={styles.statistics__item}>Bad: {bad}</p>
                    <p className={styles.statistics__item}>Total: {total}</p>
                    <p className={styles.statistics__item}>Total: {positivePercentage}%</p>
                </div>
    );
}