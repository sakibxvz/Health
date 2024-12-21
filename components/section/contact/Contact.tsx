import Badge from '@/components/common/Badge'
import styles from './Contact.module.css'
import Image from 'next/image'
import { Button } from '@/components/common/ui/Button'

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge text="CONTACT US" imageSrc="/images/Logo.png" style={{ justifyContent: 'center', color: '#004990' }} />
                    <h2 className={styles.title}>Get A Quote Today</h2>
                    <p className={styles.description}>
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
                        Industry&apos;s Standard Dummy Text Ever Since The 1500s
                    </p>
                </div>

                <div className={styles.formWrapper}>
                    <Image className={styles.imageContainer} width={543} height={750} src='/images/contact-image.png' alt="Contact" />

                    <form className={styles.form}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First name"
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last name"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@company.com"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone number</label>
                            <div className={styles.phoneInput}>
                                <select className={styles.countrySelect}>
                                    <option value="US">US</option>
                                </select>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="+1 (555) 000-0000"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="date">Select date</label>
                            <div className={styles.dateSelect}>
                                <input
                                    type="text"
                                    id="date"
                                    placeholder="December - 02 - 2022"
                                    className={styles.input}
                                    readOnly
                                />
                                <svg className={styles.dateIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className={styles.textarea}
                            ></textarea>
                        </div>

                        <Button variant='primary' className={styles.submitBtn} >APPOINTMENT NOW</Button>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

