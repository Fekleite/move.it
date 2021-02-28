import { createContext, ReactNode } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface ThemesProviderProps {
  children: ReactNode;
}

interface ThemesContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemesContext = createContext({} as ThemesContextData);

export function ThemesProvider({ children, ...rest } : ThemesProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

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