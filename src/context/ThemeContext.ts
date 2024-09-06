import { createContext } from "react";

//set up the type of our context
interface ThemeContextType {
    theme: string,
    toggleTheme: () => void 
}

//set up basic default values for our context (can be overwritten)
const ThemeContextDefault: ThemeContextType = {
    theme: "light",
    toggleTheme: () => {}
}

//utilize our createContext to instantiate the context
const ThemeContext = createContext<ThemeContextType>(ThemeContextDefault)

export default ThemeContext