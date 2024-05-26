import React from 'react'
import { IWorkBox } from '@/app/interface/IWorkBox'
import { useTheme } from '@/app/context/themeContext'


export function WorkBox({step, title, content}: IWorkBox) {
  const {color} = useTheme();
  return (
    <div className={`works-box backgroundBF-${color.substring(1)}`}>
        <span className={`shadow-${color.substring(1)}`}>{step}</span>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}
