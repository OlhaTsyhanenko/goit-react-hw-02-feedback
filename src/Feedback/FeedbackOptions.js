import styles from './Feedback.module.css';

export default function FeedbackOptions({onGood,onNeutral,onBad}) {
    return (
        <div className={styles.feedbackOptions}>
            <button type="button" onClick={onGood}>good</button>
            <button type="button" onClick={onNeutral}>neutral</button>
            <button type="button" onClick={onBad}>bad</button>
        </div>
        
    );
}