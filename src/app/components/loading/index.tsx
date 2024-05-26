import { useTheme } from '@/app/context/themeContext'
import { IColorsTheme } from '@/app/interface/IColorsTheme';
import React, { useEffect } from 'react'
import { VscLoading } from 'react-icons/vsc'

export default function Loading() {
  const {color, setColor} = useTheme();

  useEffect(() => {
    
    async function aguardarLocal(){
      const storedColor = await localStorage.getItem("color");
      
      if (storedColor === 'empty') {
        setColor('#00A584')
      }
    }

    aguardarLocal();
    
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <VscLoading size={50} className='loading mb-6'/>

        Carregando ...
    </div>
  )
}
