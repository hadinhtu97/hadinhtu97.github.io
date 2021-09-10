import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Powered by
            <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                NextJS
            </a>
            and
            <a
                href="https://vercel.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                Vercel
            </a>
            |
            <a
                href="https://github.com/hadinhtu97/hadinhtu97"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blue}
            >
                Source
            </a>
        </footer>
    )
}

export default Footer