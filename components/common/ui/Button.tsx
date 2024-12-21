import React from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface ButtonProps {
    variant: Variant;
    onClick?: () => void;
    icon?: React.ReactNode; // Pass React Icons or any other JSX as an icon
    children: React.ReactNode;
    className?: string; // Accepts additional custom class names
}

export const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    icon,
    children,
    className,
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className || ""}`}
            onClick={onClick}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};
