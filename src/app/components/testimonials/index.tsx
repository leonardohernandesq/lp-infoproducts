import { useTheme } from '@/app/context/themeContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

export function Testemonials() {
    const { color } = useTheme()
    return (
        <section className='limit-width testemonials-container'>
            <h2>Testemunhos</h2>

            <div className='testemonials-columns'>
                <article className={`profile-card background-${color.substring(1)}`}>
                    
                    <Image src="/person1.jpg" alt="Carlos Augusto Testemunho" className="profile-image" width={100} height={100}/>
                    <h2>Carlos Augusto</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nihil itaque? Incidunt numquam error vel dignissimos, illum mollitia, ex ab vitae ducimus laudantium nisi molestiae, quidem impedit. Nam, impedit iste!</p>

                        <div className='flex gap-3 mt-4 socialmedia'>
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
                    <div className="corner-effect"></div>
                </article>
                <article className={`profile-card`}>
                    <Image src="/person2.jpg" alt="Maria Clara Testemunho" className="profile-image" width={100} height={100}/>
                    <h2>Maria Clara</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nihil itaque? Incidunt numquam error vel dignissimos, illum mollitia, ex ab vitae ducimus laudantium nisi molestiae, quidem impedit. Nam, impedit iste!</p>

                        <div className='flex gap-3 mt-4 socialmedia'>
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
                    <div className="corner-effect"></div>
                </article>
                <article className={`profile-card`}>
                    <Image src="/person3.jpg" alt="João da Silva Testemunho" className="profile-image" width={100} height={100}/>
                    <h2>João da Silva</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nihil itaque? Incidunt numquam error vel dignissimos, illum mollitia, ex ab vitae ducimus laudantium nisi molestiae, quidem impedit. Nam, impedit iste!</p>

                        <div className='flex gap-3 mt-4 socialmedia'>
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
                    <div className="corner-effect"></div>
                </article>
                
            </div>
        </section>
    )
}
