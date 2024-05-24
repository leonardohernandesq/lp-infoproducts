import React from 'react'
import { IWorkBox } from '@/app/interface/IWorkBox'


export function WorkBox({step, title, content}: IWorkBox) {
  return (
    <div className='works-box'>
        <span>{step}</span>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}
