import { createContext, ReactNode } from "react";
import { GetServerSideProps } from "next";

import { ThemeProvider } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface ThemesProviderProps {
  children: ReactNode;
}

interface ThemesContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface Theme {
  title: string;
  colors: {
    shape: string;
    background: string;
    grayLine: string;
    text: string;
    textHighlight: string;
    title: string;
  }
}

export const ThemesContext = createContext({} as ThemesContextData);

export function ThemesProvider({ children, ...rest } : ThemesProviderProps) {
  const [theme, setTheme] = usePersistedState("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }
  
  return (
    <ThemesContext.Provider
      value={{ 
        theme,
        toggleTheme
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}