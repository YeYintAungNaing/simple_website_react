import React from 'react'
import day from '../assets/day.png'
import night from '../assets/night.png'
import icon from '../assets/icon.png'
import search from '../assets/search.png'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'



function NavBar({theme, setTheme}) {

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  
  }

  
  return (
    <div className='navBar'>
        <img src={theme === 'light' ? icon : logo2} alt="Icon" className='logo'></img>

        <ul className='menu'>
          <li><Link to="/home">Home</Link></li>
          <li><CustomLink to="/products">Products</CustomLink></li>
          <li><CustomLink to="/aboutUs">About us</CustomLink></li>
          <li><CustomLink to="/contact">Contact us</CustomLink></li>
        </ul>
        <div className='search'>
            <input className='search-box' placeholder='search'></input>
            <img src={search} alt=""></img>

        </div>
        <img src={theme === 'light' ? day : night } 
          alt="Icon" className='themeToggle' 
          onClick={toggleMode}></img>
    </div>
  )
}

function CustomLink({to, children, ...props}){
  const path = window.location.pathname

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

  )
}

export default NavBar