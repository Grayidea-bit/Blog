import { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { ThemeContext } from "../Context/ThemeContext";

const Contact = () => {
  const {Theme,SetTheme} = useContext(ThemeContext);
  const {Page,SetPage} = useContext(PageContext)
  
  return(
    <div>
    <p>Theme = {Theme}</p>
    <p>Page = {Page}</p>
    </div>
  )
} 
export default Contact;
