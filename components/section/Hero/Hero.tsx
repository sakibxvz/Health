'use client'

import Image from 'next/image'
import styles from './Hero.module.css'
import { Search, MapPin } from 'lucide-react'
import Badge from '@/components/common/Badge'
import { Button } from '@/components/common/ui/Button'


export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Badge text="24/7 EMERGENCY SERVICE" imageSrc="/images/Logo.png" />

                    <h1 className={styles.title} >
                        Caring for <span>Health</span>
                        <br />
                        Caring for You
                    </h1>

                    <p className={styles.description}>
                        A brief statement outlining the purpose and mission of the clinic. This can include
                        the commitment to patient care, community health.
                    </p>

                    <div className={styles.buttons}>
                        <Button variant='secondary'  >DISCOVER MORE</Button>
                        <Button variant='primary'  >SEE ALL SERVICES</Button>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/Hero Image.png"
                        alt="Healthcare professionals"
                        width={522}
                        height={455}
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.searchContainer}>
                    <div className={styles.searchCard}>
                        <div className={styles.searchInputs}>
                            <div className={styles.inputGroup}>
                                <Search className={styles.inputIcon} />
                                <input type="text" placeholder="Ex. Doctor, Hospital" />
                            </div>

                            <div className={styles.inputGroup}>
                                <Search className={styles.inputIcon} />
                                <input type="text" placeholder="Ex. Surgeon,Cardiologist" />
                            </div>

                            <div className={styles.inputGroup}>
                                <MapPin className={styles.inputIcon} />
                                <input type="text" placeholder="Set your location" />
                            </div>

                            <Button variant='primary' icon={<Search />}  >
                                Search
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

