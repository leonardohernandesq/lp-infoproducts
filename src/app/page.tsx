'use client';

import Image from 'next/image';
import { FiChevronsDown } from 'react-icons/fi';
import { Testemonials } from './components/testimonials';
import { Header } from './components/header';
import Footer from './components/footer';
import WorkBox from './components/workbox';

export default function Home() {
  // const [colorScheme, setColorScheme] = useState('light');

  // useEffect(() => {
  //   const savedColorScheme = localStorage.getItem('colorScheme');
  //   if (savedColorScheme) {
  //     setColorScheme(savedColorScheme);
  //   } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setColorScheme('dark');
  //   }
  // }, []);

  // function toggleColorScheme (){
  //   const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
  //   setColorScheme(newColorScheme);
  //   localStorage.setItem('colorScheme', newColorScheme);
  // };

  return (
    <main className='containerMain'>
      {/* <button onClick={toggleColorScheme} className="p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Alternar Esquema de Cores</button> */}
      <Header />

      <section className={`banner-container`}>
          <h1>Investimentos Inteligentes. Resultados Confiáveis</h1>
          <a href="#main"><FiChevronsDown size={40} className='icon-down'/></a>
      </section>
    
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

      <section className='limit-width testemonials-container'>
        <h2>Testemunhos</h2>

        <Testemonials />
      </section>

      <section className='limit-width why-container'>
        <h2>Porque nós escolher</h2>

        <div className='why-box'>
          <div>
            <h3>Experiência e Expertise</h3>
            <p>Nossa equipe possui ampla experiência e expertise em investimentos para garantir o melhor serviço aos nossos clientes.
              Contamos com profissionais qualificados que possuem profundo conhecimento do mercado financeiro e das diversas oportunidades de investimento.
              Estamos sempre em busca de atualizações e aperfeiçoamentos para nos mantermos à frente das tendências e mudanças do mercado,
              oferecendo estratégias personalizadas e eficazes.
            </p>
          </div>
          <div>
            <Image src={'/experiencia.webp'} alt='' width={600} height={400}/>
          </div>
        </div>
        <div className='why-box'>
          <div>
            <h3>Compromisso com o Sucesso</h3>
            <p>Estamos comprometidos com o sucesso financeiro dos nossos clientes, priorizando sua satisfação e sucesso.
              Entendemos profundamente os objetivos de cada cliente, criando planos de investimento alinhados com suas metas.
              Trabalhamos incansavelmente para maximizar retornos e minimizar riscos, oferecendo suporte contínuo e ajustando
              estratégias conforme necessário para proporcionar tranquilidade e confiança.
            </p>
          </div>
          <div>
            <Image src={'/sucesso.webp'} alt='' width={600} height={400} className='shadow-xl'/>
          </div>
        </div>
        <div className='why-box'>
          <div>
            <h3>Transparência e Confiança</h3>
            <p>Valorizamos a transparência em todas as nossas interações, fornecendo informações claras e orientação honesta.
              Explicamos detalhadamente nossas estratégias, custos e riscos associados a cada investimento.
              Mantemos nossos clientes constantemente informados sobre o desempenho de seus portfólios e promovemos uma comunicação aberta,
              garantindo que cada cliente se sinta seguro e confiante em suas decisões de investimento.
            </p>
          </div>
          <div>
            <Image src={'/informacoes.webp'} alt='' width={600} height={400}/>
          </div>
        </div>
      </section>

      <section className='limit-width contact-container'>
        <h2>Contato</h2>
        <p>Pronto para transformar seus investimentos? Entre em contato hoje mesmo para uma consulta inicial gratuita.</p>

        <form action="">
          
          <div>
            <label htmlFor="">Nome: </label>
            <input type="text" placeholder='Digite o seu nome: ' />
          </div>
          
          <div>
            <label htmlFor="">E-mail: </label>
            <input type="text" placeholder='Digite o seu e-mail: ' />
          </div>

          <div>
            <label htmlFor="">Telefone: </label>
            <input type="tel" placeholder='Digite o seu telefone: ' />
          </div>



        </form>
      </section>
      <Footer />
    </main>
  );
}
