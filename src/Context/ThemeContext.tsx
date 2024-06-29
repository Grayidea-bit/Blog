import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ThemeContextType{
  Theme: string;
  SetTheme: Dispatch<SetStateAction<string>>;
}
export const ThemeContext = createContext<ThemeContextType>({Theme:"light",SetTheme:()=>{}});

const ThemeControl = ({children}) => {
  const [Theme,SetTheme] = useState("light");
  return(
    <ThemeContext.Provider value={{Theme,SetTheme}}>
      {children}
    </ThemeContext.Provider>
  ) 

}
export default ThemeControl;
