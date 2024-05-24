'use client'

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

export interface ThemeContextData {
    isLight: boolean;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({children}: ThemeProviderProps){
    const [isLight, setIsLight] = useState(false);
    
    const value: ThemeContextData = {
        isLight
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext) as ThemeContextData;
    if(!ctx){
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return ctx;
}