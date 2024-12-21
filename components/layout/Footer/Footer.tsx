import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import { Facebook, Linkedin, TwitterIcon, YoutubeIcon } from 'lucide-react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>

                    <Link href="/" className={styles.logo}>
                        <Image src="/images/logo.png" alt="Health Logo" width={45} height={47} />
                        Health
                    </Link>
                    <p>123 Health Street, Medical City, HC 12345</p>
                    <p>+1 (123) 456-7890</p>
                    <p>info@health.com</p>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook"><Facebook /></a>
                        <a href="#" aria-label="Twitter"><TwitterIcon/></a>
                        <a href="#" aria-label="LinkedIn"><YoutubeIcon/></a>
                        <a href="#" aria-label="Instagram"><Linkedin /></a>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <Link href="/">{'>'} About Us</Link>
                    <Link href="/">{'>'} Our Pricing</Link>
                    <Link href="/">{'>'} Our Gallery</Link>
                    <Link href="/">{'>'} Appointment</Link>
                    <Link href="/">{'>'} Privacy Policy</Link>
                </div>
                <div className={styles.column}>
                    <h3>Department</h3>
                    <Link href="/">{'>'} Neurology</Link>
                    <Link href="/">{'>'} Cardiology</Link>
                    <Link href="/">{'>'} Dental</Link>
                    <Link href="/">{'>'} Ophthalmology</Link>
                    <Link href="/">{'>'} Other Departments</Link>
                </div>
                <div className={styles.column}>
                    <h3>Useful Links</h3>
                    <Link href="/">{'>'} Terms of Service</Link>
                    <Link href="/">{'>'} Privacy Policy</Link>
                    <Link href="/">{'>'} Documentation</Link>
                    <Link href="/">{'>'} Changelog</Link>
                    <Link href="/">{'>'} Components</Link>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p>Copyright © 2024 Health.com. All Rights Reserved</p>
            </div>
        </footer>
    )
}

