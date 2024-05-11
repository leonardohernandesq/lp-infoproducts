import React from 'react'
import Image from 'next/image'

export function Header() {
  return (
    <header className='flex justify-center items-center'>
        <Image src={'/logowhite.png'} alt='Logo com gráfico subindo da InvestSmart' width={140} height={60} className='logo'/>
    </header>
  )
}
