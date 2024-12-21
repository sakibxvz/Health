import Badge from '@/components/common/Badge'
import styles from './Services.module.css'
import { Button } from '@/components/common/ui/Button'
import Image from 'next/image'

const services = [
    {
        title: 'Internal Medicine',
        description: '30+ Doctors',
    },
    {
        title: 'Dental Care',
        description: '30+ Doctors',
    },
    {
        title: 'Urology Care',
        description: '30+ Doctors',
    },
    {
        title: 'Neurology Care',
        description: '30+ Doctors',
    },
    {
        title: 'Gynecologists',
        description: '30+ Doctors',
    },
    {
        title: 'Ophthalmology',
        description: '30+ Doctors',
    },
    {
        title: 'Orthopedics',
        description: '30+ Doctors',
    },
    {
        title: 'Cardiology',
        description: '30+ Doctors',
    },
]

export default function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge text="OUR SERVICES" imageSrc="/images/Logo.png" />
                    <h2 className={styles.title}>Our Mediax Specialities Service</h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <Image
                                src={`/images/services/S${index + 1}.png`}
                                alt={service.title}
                                width={50}
                                height={50}
                                className={styles.icon}
                            />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Button variant="primary" className={styles.readMore}>READ MORE</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

