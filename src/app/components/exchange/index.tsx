import React, { useEffect, useRef } from 'react';
import { exchange } from '@/app/api/invest';
import Image from 'next/image';
import { useTheme } from '@/app/context/themeContext';


interface ExchangeItem {
  id: number;
  icon: string;
  moeda: string;
  value: number;
}

export function Exchange() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollLeftRef = useRef<boolean>(false); // Começar rolando da esquerda para a direita
    const {color} = useTheme();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = container.scrollWidth - container.clientWidth;

        const scrollContent = () => {
        if (container.scrollLeft === 0) {
            scrollLeftRef.current = true;
        } else if (container.scrollLeft === scrollAmount) {
            scrollLeftRef.current = false;
        }

        if (scrollLeftRef.current) {
            container.scrollLeft += 1; // Rolar para a esquerda
        } else {
            container.scrollLeft -= 1; // Rolar para a direita
        }
        };

        const scrollInterval = setInterval(scrollContent, 20);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className='flex items-center justify-center gap-3 w-full mx-auto'>
        <div 
            className={`container_exchange border-${color.substring(1)}`} 
            ref={containerRef} 
            style={{borderBottom:''}}
        >
            {exchange.map((item: ExchangeItem) => (
            <div key={item.id} className='box_exchange'>
                <Image src={`/${item.icon}`} alt={item.moeda} height={40} width={40} />
                <div>
                <p>{item.moeda}</p>
                <p>{item.value} $</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
