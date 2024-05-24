import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

export function Testemonials() {
    return (
        <section className='limit-width testemonials-container'>
        <h2>Testemunhos</h2>

        <div className='testemonials-columns'>
            <article>
                <Image src={'/person1.jpg'} alt="Carlos Augusto" width={200} height={200} />
                <h2>Carlos Augusto</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nihil itaque? Incidunt numquam error vel dignissimos, illum mollitia, ex ab vitae ducimus laudantium nisi molestiae, quidem impedit. Nam, impedit iste!</p>
                <div className='flex gap-3 mt-4'>
                    <Link href={'www.instagram.com'} target='_blank' >
                        <FiInstagram size={20} />
                    </Link>
                    <Link href={'www.facebook.com'} target='_blank' >
                        <FiFacebook size={20} />
                    </Link>
                    <Link href={'www.linkedin.com'} target='_blank' >
                        <FiLinkedin size={20} />
                    </Link>
                </div>
            </article>
            <article>
                <Image src={'/person2.jpg'} alt="Carlos Augusto" width={200} height={200} />
                <h2>Maria Clara</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nihil itaque? Incidunt numquam error vel dignissimos, illum mollitia, ex ab vitae ducimus laudantium nisi molestiae, quidem impedit. Nam, impedit iste!</p>
                <div className='flex gap-3 mt-4'>
                    <Link href={'www.instagram.com'} target='_blank' >
                        <FiInstagram size={20} />
                    </Link>
                    <Link href={'www.facebook.com'} target='_blank' >
                        <FiFacebook size={20} />
                    </Link>
                    <Link href={'www.linkedin.com'} target='_blank' >
                        <FiLinkedin size={20} />
                    </Link>
                </div>
            </article>
            <article>
                <Image src={'/person3.jpg'} alt="Carlos Augusto" width={200} height={200} />
                <h2>Jhonathan Schoenary</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nihil itaque? Incidunt numquam error vel dignissimos, illum mollitia, ex ab vitae ducimus laudantium nisi molestiae, quidem impedit. Nam, impedit iste!</p>
                <div className='flex gap-3 mt-4'>
                    <Link href={'www.instagram.com'} target='_blank' >
                        <FiInstagram size={20} />
                    </Link>
                    <Link href={'www.facebook.com'} target='_blank' >
                        <FiFacebook size={20} />
                    </Link>
                    <Link href={'www.linkedin.com'} target='_blank' >
                        <FiLinkedin size={20} />
                    </Link>
                </div>
            </article>
        </div>
      </section>
        
    )
}
