import NavMenu from "./components/NavMenu";
import GlobalStyle from "./styles/GlobalStyle";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScrollbar from "./components/SmoothScrollbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";



function App() {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <NavMenu />
      <ScrollToTop />
      <SmoothScrollbar>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/project' element={ <Project />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
        <Footer />
      </SmoothScrollbar>
    </>
  );
}

export default App;
