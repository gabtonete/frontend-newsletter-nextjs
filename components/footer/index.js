import styles from './footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <span>{new Date().getFullYear()} - github/gabtonete</span>
        </div>
    )
}