import { useTheme } from '@/app/context/themeContext';
import { IColorsTheme } from '@/app/interface/IColorsTheme';
import React, { useEffect, useState } from 'react';
import { FiSettings } from 'react-icons/fi';

export default function Tabs() {
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
        const changeScrollbarColor = () => {
            const style = document.createElement('style');
            style.setAttribute('data-scrollbar-color', 'true');
            style.innerHTML = `
                ::-webkit-scrollbar {
                    background-color: ${color};
                    width: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #2b2b2b;
                    border: 1px solid ${color};
                }
            `;
            document.head.appendChild(style);
        };

        changeScrollbarColor();

        return () => {
            const style = document.querySelector('style[data-scrollbar-color]');
            if (style) {
                style.remove();
            }
        };
    }, [color]);

    return (
        <div
            className='fixed right-0 top-[40%] z-50 hover:brightness-90'
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <button className={`flex justify-center items-center ${isActive ? 'w-32' : ''} w-12 h-12 shadow-lg background-${color.substring(1)}`}>
                <FiSettings size={25} />
            </button>
            {isActive && (
                <>
                    <button onClick={() => setColor('#00A8DB')} className="flex justify-center items-center w-32 h-12 shadow-lg bg-[#00A8DB]">
                        Ativos
                    </button>
                    <button onClick={() => setColor('#820056')} className="flex justify-center items-center w-32 h-12 shadow-lg bg-[#820056]">
                        Performance
                    </button>
                    <button onClick={() => setColor('#00A584')} className="flex justify-center items-center w-32 h-12 shadow-lg bg-[#00A584]">
                        Análise
                    </button>
                    <button onClick={() => setColor('#FFA500')} className="flex justify-center items-center w-32 h-12 shadow-lg bg-[#FFA500]">
                        Volatilidade
                    </button>
                </>
            )}
        </div>
    );
}
