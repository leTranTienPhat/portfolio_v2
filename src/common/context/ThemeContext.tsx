import { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactElement
}

type IThemeContext = {
  theme: string,
  handleThemeSwitch: () => void,
}

let localStorageTheme: string;
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  localStorageTheme = 'dark'
} else {
  localStorageTheme = 'light'
}

const initialThemeContext: IThemeContext = {
  theme: localStorageTheme,
  handleThemeSwitch: () => { },
}

export const ThemeContext = createContext(initialThemeContext)

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>(localStorageTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      handleThemeSwitch,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}