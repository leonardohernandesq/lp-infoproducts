import React from 'react'
import { WorkBox } from '../workbox'

export function HowWorks() {
  return (
    <section className='limit-width how-works-container'>
        <h2>Como Funciona</h2>

        <div className='worksbox-container'>  
          <WorkBox step={1}
            title='Avaliação Profissional'
            content='Realizamos uma avaliação da sua situação financeira, objetivos e tolerância ao risco para criar uma estratégia personalizada.'
          />
          <WorkBox step={2}
            title='Plano de Investimento'
            content='Após a avaliação, desenvolvemos planos de investimento sob medida para atender às suas metas financeiras.'
          />
          <WorkBox step={3}
            title='Implementação da Estratégia'
            content='Após aprovação, implementamos a estratégia de investimento com eficiência, garantindo a máxima performance.'
          />
          <WorkBox step={4}
            title='Relatórios Periódicos'
            content='Fornecemos relatórios periódicos sobre o desempenho dos seus investimentos, permitindo uma análise precisa.'
          />
          <WorkBox step={5}
            title='Monitoramento Contínuo'
            content='Mantemos um monitoramento constante dos seus investimentos, fazendo ajustes conforme necessário para otimizar os resultados.'
          />
          <WorkBox step={6}
            title='Suporte Personalizado'
            content='Realizamos um suporte contínuo para responder às suas perguntas, fornecer orientação adicional e ajustar sua estratégia conforme necessário.'
          />
          <WorkBox step={7}
            title='Educação Financeira'
            content='Oferecemos recursos educacionais para ajudá-lo a entender os princípios fundamentais de investimento e tomada de decisões conscientes.'
          />
          <WorkBox step={8}
            title='Oportunidades Exclusivas'
            content='Mantemos você informado sobre oportunidades de investimento e eventos, ajudando você a capitalizar em momentos estratégicos.'
          />
        </div>
      </section>
  )
}
