import styles from './Divider.module.css'

interface DividerProps {
    text: string
    linkText: string
    href: string
}

export default function Divider({ text, linkText, href }: DividerProps) {
    return (
        <div className={styles.dividerWrapper}>
            <div className={styles.divider}>
                <span className={styles.text}>{text}</span>
                <a href={href} className={styles.link}>
                    {linkText}
                </a>
            </div>
        </div>
    )
}

