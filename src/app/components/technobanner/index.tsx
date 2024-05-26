import React, { useState } from 'react'
import BarChart from './barcharts';
import Image from 'next/image';
import LineChart from './linecharts';
import AnaliseChart from './analisecharts';
import NewChart from './newcharts';
import { useTheme } from '@/app/context/themeContext';

export default function TechnoBanner() {
  const {color, setColor} = useTheme();

  const dataBar = {
    labels: ['Renda Fixa', 'FIIs', 'Ações', 'Dividendos', 'Criptos', 'Lucros'],
    datasets: [
      {
        label: 'Ativos',
        data: [4000, 2240, 8500, 2100, 1000, 3785],
        backgroundColor: [
          color,
        ],        
        borderColor:[
          color
        ]
        
      },
    ],
  };

  const dataPerformance = {
      labels: ['1950','1960','1970','1980','1990','2000','2010','2020','2024'],
      datasets: [{ 
          data: [10,12,16,40,70,90,101,203,347],
          label: "S&P",
          borderColor: "#dfcdd9",
          fill: false
        }, { 
          data: [10,12,40,26,18,45,62,75,208],
          label: "NSDQ",
          borderColor: "#ad749a",
          fill: false
        }, { 
          data: [10,65,25,50,26,125,32,280,310],
          label: "BTC",
          borderColor: "#b81f85",
          fill: false
        }, { 
          data: [10,9,8,8,9,10,12,12,12],
          label: "POUPANÇA",
          borderColor: "#7e155b",
          fill: false
        }, { 
          data: [10,11,12,13,12,13,12,11,11],
          label: "R. FIXA",
          borderColor: "#4d0133",
          fill: false
        }
      ]
  };

  const dataAnalise = {
    labels: ['Renda Fixa', 'FIIs', 'Ações', 'Dividendos', 'Criptos', 'Lucros'],
    datasets: [
      {
        label: 'Analise',
        data: [4000, 2240, 8500, 2100, 1000, 3785],
        backgroundColor: [
          color,
        ],
        borderColor:[
          color
        ]
        
      },
    ],
  };

  const dataNew = {
    labels: ['Renda Fixa', 'FIIs', 'Ações', 'ETFs', 'Criptos'],
    datasets: [
      {
        label: 'Analise',
        data: [35, 15, 10, 35, 5],
        backgroundColor: [
          '#FFA500',
          '#be7c00',
          '#915e00',
          '#704a02',
          '#1a1100',
        ],
        borderColor:[
          '#5c5c5c'
        ]
        
      },
    ],
  };


  return (
    <div className='techno_banner relative overflow-hidden' style={{
      backgroundImage: `radial-gradient(circle at 100%, ${color}, #000)`,
      boxShadow: `10px 0 20px ${color}`,
    }}>
        <Image src={'/logowhite.png'} alt='Logo com gráfico subindo da InvestSmart' width={140} height={60} className='logo'/>

        <video className='banner_video'  src="/animation.mp4" autoPlay muted loop />
        <div className='banner_mac'>
            <div className='tabs_charts'>
              <button onClick={() => { setColor('#00A8DB') }} className='bg-[#00A8DB]'>Ativos</button>
              <button onClick={() => { setColor('#820056') }} className='bg-[#820056]'>Performance</button>
              <button onClick={() => { setColor('#00A584') }} className='bg-[#00A584]'>Analise</button>
              <button onClick={() => { setColor('#FFA500') }} className='bg-[#FFA500]'>Volatilidade</button>
            </div>
            <div className='chart_div'>
                {color === '#00A8DB' && <BarChart data={dataBar}  />}
                {color === '#820056' && <LineChart data={dataPerformance}  />}
                {color === '#00A584' && <AnaliseChart data={dataAnalise}  />}
                {color === '#FFA500' && <NewChart data={dataNew}  />}
                
            </div>
        </div>
    </div>
  )
}
