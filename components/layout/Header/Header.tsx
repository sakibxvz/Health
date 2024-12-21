'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import styles from "./Header.module.css";
import { Button } from '@/components/common/ui/Button';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        console.log('Menu toggled:', !isMenuOpen); // Debugging statement
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/Logo.png"
                        alt="Health Logo"
                        width={45.04}
                        height={46}
                        className={styles.dot}
                    />
                    <span className={styles.logoText}>Health</span>
                </Link>

                {/* Navigation Links */}
                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    <Link href="/">Find Doctors</Link>
                    <Link href="/">Hospitals</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Contact</Link>
                </nav>

                {/* Action Buttons */}
                <div className={styles.actions}>
                    {/* Search Button */}
                    <button className={styles.iconButton}>
                        <Search className={styles.icon} />
                    </button>

                    {/* Cart Button */}
                    <button className={styles.iconButton}>
                        <div className={styles.cartWrapper}>
                            <ShoppingCart className={styles.icon} />
                            <span className={styles.badge}>5</span>
                        </div>
                    </button>

                    {/* Appointment Button */}
                    <Button variant='primary' className={styles.appointmentBtn}>
                        APPOINTMENT NOW
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.menuButton}
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <X className={styles.icon} />
                        ) : (
                            <Menu className={styles.icon} />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
