import styles from './button.module.css';

export const Button = props => {
    const {
        text,
        onClick

    } = props;

    return (
        <button
            className={styles.container}
            type='submit'
            onClick={onClick}
        >
            {text}
        </button>
    )
}