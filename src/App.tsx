import { useState } from 'react'
import UserComponent from './components/UserComponent'
import ThemeContext from './context/ThemeContext'
import ThemeComponent from './components/ThemeComponent'
import ItemComponent from './components/ItemComponent'


function App() {
  // to explicitly type our state, we use <TYPE> like so:
  // but, it is not required when typescript can infer our state
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if(theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    //our provider lets our entire application access our context
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <UserComponent />
      <ThemeComponent />
      <ItemComponent />
    </ThemeContext.Provider>
  )
}

export default App
