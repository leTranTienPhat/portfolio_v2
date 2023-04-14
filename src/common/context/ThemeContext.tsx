import { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactElement
}

type IThemeContext = {
  theme: string,
  handleThemeSwitch: () => void,
}

const initialThemeContext: IThemeContext = {
  theme: 'light',
  handleThemeSwitch: () => { },
}

export const ThemeContext = createContext(initialThemeContext)

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
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