import Image from 'next/image'
import styles from './Doctors.module.css'
import Badge from '@/components/common/Badge'

const doctors = [
    {
        name: 'Dr. Dredor Smith',
        specialty: 'Medicine specialist',
        rating: 3.9,
        reviews: 252,
        patients: 4895,
        hospital: 'Infomedica Hospital, NYC',
        image: '/images/Doctor/Doctor1.png'
    },
    {
        name: 'Dr. Amrita sen gupta',
        specialty: 'General Surgeon',
        rating: 4.8,
        reviews: 599,
        patients: 1698,
        hospital: 'Medicina Hospital, NYC',
        image: '/images/Doctor/Doctor2.png'
    },
    {
        name: 'Dr. Christinne Jones',
        specialty: 'Pediatrist',
        rating: 4.8,
        reviews: 321,
        patients: 9375,
        hospital: 'Advocate Hospital, NYC',
        image: '/images/Doctor/Doctor3.png'
    }
]

export default function Doctors() {
    return (
        <section className={styles.doctors}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge imageSrc="/images/Logo.png" text="OUR DOCTOR'S" style={{ justifyContent: 'center', color: '#004990' }} />
                    <h2 className={styles.title}>Our Special Doctors</h2>
                    <p className={styles.description}>
                        Our team of specialists is at the forefront of medical innovation. Each specialist
                        brings a unique blend of expertise, empathy, and experience to ensure that your
                        health is in the best hands.
                    </p>
                </div>

                <div className={styles.grid}>
                    {doctors.map((doctor, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={300}
                                    height={300}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.doctorName}>{doctor.name}</h3>
                                <div className={styles.specialtyWrapper}>
                                    <p className={styles.specialty}>{doctor.specialty}</p>
                                    <div className={styles.rating}>
                                        <span className={styles.stars}>★</span>
                                        <span className={styles.score}>{doctor.rating}</span>
                                        <span className={styles.reviews}>({doctor.reviews})</span>
                                    </div>
                                </div>
                                <div className={styles.stats}>
                                    <p className={styles.patients}>{doctor.patients} Patients</p>
                                    <p className={styles.hospital}>{doctor.hospital}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

