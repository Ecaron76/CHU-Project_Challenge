import React, { createContext, useState, useContext } from 'react';

export const themes = {
    light: {
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
    },
    dark: {
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
    },
};

export const ThemeContext = createContext(themes.light);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
