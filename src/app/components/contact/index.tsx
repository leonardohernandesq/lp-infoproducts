
'use client'

import { useTheme } from '@/app/context/themeContext';
import React, { ReactNode, useState } from 'react'

interface ISubmitContact {
    data: {
        name: string;
        email: string;
        tel: string;
    };
    event: React.FormEvent<HTMLFormElement>;
}

export function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const {color} = useTheme();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            tel: formData.get('tel') as string
        };
        setIsLoading(true);
        try {
            setTimeout(() => {
                alert('Enviado!');
                console.log(data)
                setIsLoading(false);
            }, 1000);
        } catch {
            alert('Erro ao enviar!');
            setIsLoading(false);
        }
    }

    return (
        <section className={`limit-width contact-container border-${color.substring(1)}`}>
            <h2 className='content'>Contato</h2>
            <p className='content'>Pronto para transformar seus investimentos? Entre em contato hoje mesmo para uma consulta inicial gratuita.</p>

            <form action="" className='content' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nome: </label>
                    <input name="name" type="text" placeholder='Digite o seu nome: ' />
                </div>
                
                <div>
                    <label htmlFor="">E-mail: </label>
                    <input name="email" type="text" placeholder='Digite o seu e-mail: ' />
                </div>

                <div>
                    <label htmlFor="">Telefone: </label>
                    <input name="tel" type="tel" placeholder='Digite o seu telefone: ' />
                </div>
                <button type="submit" disabled={isLoading} className={`button_contact background-${color.substring(1)} ${isLoading && 'opacity-50'}`}>
                    {!isLoading && ('Aproveitar a Consultoria Grátis')}
                    {isLoading && ('Carregando...')}
                </button>
            </form>
        </section>
    )
}
