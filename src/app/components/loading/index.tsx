import React from 'react'
import { VscLoading } from 'react-icons/vsc'

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <VscLoading size={50} className='loading mb-6'/>

        Carregando ...
    </div>
  )
}
