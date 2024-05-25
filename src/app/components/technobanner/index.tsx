import React, { useState } from 'react'
import BarChart from './charts';
import Image from 'next/image';

export default function TechnoBanner() {
  const [color, setColor] = useState('#00A8DB');

  const data = {
    labels: ['Renda Fixa', 'FIIs', 'Ações', 'Dividendos', 'Criptos', 'Lucros'],
    datasets: [
      {
        label: 'Performance',
        data: [4000, 2240, 8500, 2100, 1000, 3785],
        backgroundColor: [
          color,
        ],
        
      },
    ],
  };


  return (
    <div className='techno_banner relative overflow-hidden' style={{
      backgroundImage: `radial-gradient(circle at 100%, ${color}, #000)`,
      boxShadow: `10px 0 30px ${color}`,
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
                <BarChart data={data}  />
            </div>
        </div>
    </div>
  )
}
