import Image from 'next/image'
import styles from './WhyChooseUs.module.css'
import Badge from '@/components/common/Badge'

export default function WhyChooseUs() {
    return (
        <section className={styles.whyChooseUs}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badgeWrapper}>
                        <Badge text=" WHY CHOOSE US" imageSrc="/images/logo.png" />
                    </div>
                   

                    <h2 className={styles.title}>
                        We Remain Continuously Available For Your Health Services
                    </h2>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <span className={styles.number}>01</span>
                            <div className={styles.featureContent}>
                                <h3>Compassionate & Expert Care</h3>
                                <p>
                                    Our team of dedicated healthcare professionals combines years
                                    of experience with a genuine commitment to providing.
                                </p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <span className={styles.number}>02</span>
                            <div className={styles.featureContent}>
                                <h3>Patient-Centered Approach</h3>
                                <p>
                                    Your health and well-being are our top priorities. We take the time
                                    to listen to your concerns, answer your questions.
                                </p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <span className={styles.number}>03</span>
                            <div className={styles.featureContent}>
                                <h3>Personalized Treatment Plans</h3>
                                <p>
                                    We understand that every patient is unique, and their healthcare
                                    needs may vary. That&apos;s why we create individualized treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/whysection.png"
                        alt="Doctor"
                        width={643.25}
                        height={658.02}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    )
}

