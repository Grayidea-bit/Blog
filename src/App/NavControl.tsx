import { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageControl,{PageContext} from "../Context/PageContext";
import ThemeControl,{ThemeContext} from "../Context/ThemeContext";
import Home from './Home';
import Tech from './Tech';
import Code from './Code';
import Photo from './Photo';
import Contact from './Contact';


const NavBar = () => {
  const {Page,SetPage} = useContext(PageContext);
  const {Theme,SetTheme} = useContext(ThemeContext);
  const navigate = useNavigate();

  const SwitchPage = (path:string) => {
    navigate(path);  
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>SwitchPage("/")} style={{cursor:"pointer"}}>GraBlog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>SwitchPage("/")}>Home</Nav.Link>
            <Nav.Link onClick={()=>SwitchPage("/Tech")}>Tech</Nav.Link>
            <Nav.Link onClick={()=>SwitchPage("/Code")}>Code</Nav.Link>
            <Nav.Link onClick={()=>SwitchPage("/Photo")}>Photo</Nav.Link>
            <Nav.Link onClick={()=>SwitchPage("/Contact")}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

const NavControl = () => {
  return(
    <PageControl>
      <ThemeControl>
        <NavBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Code' element={<Code />} />
          <Route path='/Photo' element={<Photo />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </ThemeControl>
    </PageControl>
  )
}
export default NavControl;
