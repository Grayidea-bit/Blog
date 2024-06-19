import { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { ThemeContext } from "../Context/ThemeContext";

const Code = () => {
  const {Theme,SetTheme} = useContext(ThemeContext);
  const {Page,SetPage} = useContext(PageContext)
  
  return(
    <div>
    <p>Code</p>
    </div>
  )
} 
export default Code;
