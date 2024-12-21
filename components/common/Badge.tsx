import Image from 'next/image';
import styles from './Badge.module.css'; // Import the CSS module

interface BadgeProps {
    text: string;
    imageSrc: string;
    width?: number; // Optional width for the image
    height?: number; // Optional height for the image
    style?: React.CSSProperties; // Inline styles for overriding
}

const Badge: React.FC<BadgeProps> = ({ text, imageSrc, width = 28, height = 29, style }) => {
    return (
        <div className={styles.badge} style={style}>
            <Image className={styles.icon} width={width} height={height} src={imageSrc} alt="Logo" />
            {text}
        </div>
    );
};

export default Badge;
