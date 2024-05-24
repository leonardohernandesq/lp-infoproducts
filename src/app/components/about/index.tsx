import React from 'react'
import Image from 'next/image'

export function AboutUs() {
    return (
        <section id='main' className='limit-width aboutus-container'>
            <div>
            <Image src={'/about.jpg'} alt='Logo com gráfico subindo da InvestSmart' width={700} height={460} className='logo'/>
            </div>
            <div className='about-text'>
            <h2>Bem-vindo à InvestSmart</h2>
            <p>Nos dedicamos apaixonadamente a fornecer consultoria financeira
                personalizada e orientação especializada para otimizar seus investimentos e alcançar seus objetivos
                financeiros de longo prazo. Nossa equipe altamente experiente e qualificada trabalha incansavelmente para
                entender suas necessidades únicas e criar estratégias de investimento personalizadas que se alinhem perfeitamente
                com seus objetivos e tolerância ao risco. Com um foco inabalável na excelência e no sucesso do cliente,
                estamos aqui para oferecer suporte contínuo, monitoramento e ajustes conforme necessário, garantindo que você
                esteja sempre no caminho certo para uma saúde financeira sólida e sustentável.
            </p>
            </div>
        </section>
    )
}
