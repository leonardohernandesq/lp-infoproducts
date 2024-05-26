'use client';

import React, { useEffect } from 'react';
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


export default function Home() {
  const { color, setColor } = useTheme();

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
