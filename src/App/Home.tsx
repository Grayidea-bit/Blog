import { useContext } from "react";
import { PageContext } from "../Context/PageContext";
import { ThemeContext } from "../Context/ThemeContext";

const Home = () => {
  const {Theme,SetTheme} = useContext(ThemeContext);
  const {Page,SetPage} = useContext(PageContext)
  
  return(
    <div>
    <p>Theme = {Theme}</p>
    <p>Page = {Page}</p>
    </div>
  )
} 
export default Home;
