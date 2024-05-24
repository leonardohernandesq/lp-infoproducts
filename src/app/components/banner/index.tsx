import React from 'react'
import { FiChevronsDown } from 'react-icons/fi'

export function Banner() {
    return (
        <section className={`banner-container`}>
            <h1 className='content'>Investimentos Inteligentes. Resultados Confiáveis</h1>
            <a className='content' href="#main">
                <FiChevronsDown size={40} className='icon-down'/>
            </a>
        </section>
    )
}
