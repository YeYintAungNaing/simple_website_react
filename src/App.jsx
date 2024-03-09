import "./style.css"
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Products from "./pages/Products"
import { Route,Routes  } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App(){

  
  const currentTheme = localStorage.getItem('currentTheme')
  const [theme, setTheme] = useState(currentTheme ? 
    currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme)
    
  }, [theme])


  return ( 
    <>
      <div className={`container ${theme}`}> 
        <NavBar theme={theme} setTheme={setTheme}></NavBar>
        <Routes>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/products" element={<Products/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/aboutUs" element={<AboutUs/>} ></Route>
        </Routes>
      </div>
    </> 
  );
}

export default App





