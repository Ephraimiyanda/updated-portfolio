"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = 'light' | 'dark' | 'system';
type BackgroundColor = 'default' | 'blue' | 'purple' | 'green' | 'red' | 'orange';

interface ThemeContextType {
  theme: Theme;
  backgroundColorScheme: BackgroundColor;
  setTheme: (theme: Theme) => void;
  setBackgroundColorScheme: (color: BackgroundColor) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [backgroundColorScheme, setBackgroundColorScheme] = useState<BackgroundColor>('default');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedBackgroundColor = localStorage.getItem('backgroundColorScheme') as BackgroundColor;
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedBackgroundColor) {
      setBackgroundColorScheme(savedBackgroundColor);
    }
  }, []);

  useEffect(() => {
    const updateResolvedTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setResolvedTheme(systemTheme);
      } else {
        setResolvedTheme(theme);
      }
    };

    updateResolvedTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateResolvedTheme);
      return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
    }
  }, [theme]);

  useEffect(() => {
    // Apply theme and background color to document
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);

    // Apply background color scheme
    const backgroundClasses = [
      'bg-default', 'bg-blue', 'bg-purple', 'bg-green', 'bg-red', 'bg-orange'
    ];
    
    backgroundClasses.forEach(cls => root.classList.remove(cls));
    root.classList.add(`bg-${backgroundColorScheme}`);

    // Save preferences to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('backgroundColorScheme', backgroundColorScheme);
  }, [theme, backgroundColorScheme, resolvedTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const handleSetBackgroundColorScheme = (color: BackgroundColor) => {
    setBackgroundColorScheme(color);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        backgroundColorScheme,
        setTheme: handleSetTheme,
        setBackgroundColorScheme: handleSetBackgroundColorScheme,
        resolvedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};