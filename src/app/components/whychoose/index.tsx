import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/app/context/themeContext'

export function WhyChoose() {
  const {color} = useTheme();
  const [whichChoose, setWhichChoose] = useState(1);
  return (
    <section className='limit-width why-container'>
        <h2>Porque nós escolher</h2>
        
        <div className="tabs flex items-center justify-center p-4 my-6">
          <button className={`${whichChoose === 1 ? 'border-t-2 border-l-2 border-r-2' : 'border-b-2 '} p-4 border-${color.substring(1)}`} onMouseEnter={() => {setWhichChoose(1)}}>Experiencia e Expertise</button>
          <button className={`${whichChoose === 2 ? 'border-t-2 border-l-2 border-r-2' : 'border-b-2 '} p-4 border-${color.substring(1)}`} onMouseEnter={() => {setWhichChoose(2)}}>Compromisso com o Sucesso</button>
          <button className={`${whichChoose === 3 ? 'border-t-2 border-l-2 border-r-2' : 'border-b-2 '} p-4 border-${color.substring(1)}`} onMouseEnter={() => {setWhichChoose(3)}}>Transparência e Confiança</button>
        </div>

        {whichChoose === 1 && (
          <div className={`why-box bg-zinc-950 rounded-xl  border-${color.substring(1)}`}>
              <div>
                <h3>Experiência e Expertise</h3>
                <p>Nossa equipe possui ampla experiência e expertise em investimentos para garantir o melhor serviço aos nossos clientes.
                  Contamos com profissionais qualificados que possuem profundo conhecimento do mercado financeiro e das diversas oportunidades de investimento.
                  Estamos sempre em busca de atualizações e aperfeiçoamentos para nos mantermos à frente das tendências e mudanças do mercado,
                  oferecendo estratégias personalizadas e eficazes.
                </p>
              </div>
            <div>
              <Image src={'/experiencia.webp'} alt='' width={600} height={400} className='rounded-xl'/>
            </div>
          </div>
        )}
        {whichChoose === 2 && (
          <div className={`why-box bg-zinc-950 rounded-xl  border-${color.substring(1)}`}>
            <div>
              <h3>Compromisso com o Sucesso</h3>
              <p>Estamos comprometidos com o sucesso financeiro dos nossos clientes, priorizando sua satisfação e sucesso.
                Entendemos profundamente os objetivos de cada cliente, criando planos de investimento alinhados com suas metas.
                Trabalhamos incansavelmente para maximizar retornos e minimizar riscos, oferecendo suporte contínuo e ajustando
                estratégias conforme necessário para proporcionar tranquilidade e confiança.
              </p>
            </div>
            <div>
              <Image src={'/sucesso.webp'} alt='' width={600} height={400} className='shadow-xl rounded-xl'/>
            </div>
          </div>
        )}
        {whichChoose === 3 && (
          <div className={`why-box bg-zinc-950 rounded-xl border-${color.substring(1)}`}>
            <div>
              <h3>Transparência e Confiança</h3>
              <p>Valorizamos a transparência em todas as nossas interações, fornecendo informações claras e orientação honesta.
                Explicamos detalhadamente nossas estratégias, custos e riscos associados a cada investimento.
                Mantemos nossos clientes constantemente informados sobre o desempenho de seus portfólios e promovemos uma comunicação aberta,
                garantindo que cada cliente se sinta seguro e confiante em suas decisões de investimento.
              </p>
            </div>
            <div>
              <Image src={'/informacoes.webp'} alt='' width={600} height={400} className='rounded-xl'/>
            </div>
          </div>
        )}
      </section>
  )
}
