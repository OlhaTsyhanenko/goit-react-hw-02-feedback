import styles from './Feedback.module.css';

export default function FeedbackOptions({message}) {
    return (
        <p className={styles.message}>{message}</p>
    );
}