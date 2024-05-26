'use client';

import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Banner } from './components/banner';
import { AboutUs } from './components/about';
import { HowWorks } from './components/howworks';
import { Testemonials } from './components/testimonials';
import { WhyChoose } from './components/whychoose';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Exchange } from './components/exchange';
import TechnoBanner from './components/technobanner';
import { useTheme } from './context/themeContext';
import { IColorsTheme } from '@/app/interface/IColorsTheme'
import Loading from './components/loading';
import { FiSettings } from 'react-icons/fi';


export default function Home() {
  const { color, setColor } = useTheme();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
      setColor(storedColor as IColorsTheme['color']);
    }
  }, [setColor]);

  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    // Função para injetar estilos CSS para alterar a cor do scrollbar
    const changeScrollbarColor = () => {
      const style = document.createElement('style');
      style.setAttribute('data-scrollbar-color', 'true'); // Para identificar os estilos posteriormente
      style.innerHTML = `
        ::-webkit-scrollbar {
          background-color: ${color};
          width: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2b2b2b; /* Cor do thumb */
          border: 1px solid ${color}; /* Cor da borda */
        }
      `;
      document.head.appendChild(style);
    };

    // Chama a função ao iniciar e sempre que a cor mudar
    changeScrollbarColor();

    // Remove os estilos ao desmontar o componente para evitar vazamento de memória
    return () => {
      const style = document.querySelector('style[data-scrollbar-color]');
      if (style) {
        style.remove();
      }
    };
  }, [color]);
  
  const loading = !!color;

  return (
    <main className={`containerMain`}>
      { !loading && (<Loading />)}
      { loading && (
        <>
          <Header />
          <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className={`z-50 fixed flex justify-center items-center right-0 top-[40%] ${isActive ? 'w-32' : 'w-12'} h-12 shadow-lg background-${color.substring(1)} hover:brightness-90 transition-all`}>
            <FiSettings size={25} />
          </button>
          {isActive && <>
            <button onClick={() => {setColor('#00A8DB')}} onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className={`z-50 fixed flex justify-center items-center right-0 top-[45%] w-32 h-12 shadow-lg bg-[#00A8DB] hover:brightness-90`}>
              Ativos
            </button>
            <button onClick={() => {setColor('#820056')}}  onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}  className={`z-50 fixed flex justify-center items-center right-0 top-[50%] w-32 h-12 shadow-lg bg-[#820056] hover:brightness-90`}>
              Performance
            </button>
            <button onClick={() => {setColor('#00A584')}}  onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}  className={`z-50 fixed flex justify-center items-center right-0 top-[55%] w-32 h-12 shadow-lg bg-[#00A584] hover:brightness-90`}>
              Analise
            </button>
            <button onClick={() => {setColor('#FFA500')}}  onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}  className={`z-50 fixed flex justify-center items-center right-0 top-[60%] w-32 h-12 shadow-lg bg bg-[#FFA500] hover:brightness-90`}>
              Volatilidade
            </button>
          </>}
          <TechnoBanner />
          <Exchange />
          <AboutUs />
          <HowWorks />
          <Testemonials />
          <WhyChoose />
          <Contact />
          <Footer />
          </>
        )}
    </main>
  );
}
