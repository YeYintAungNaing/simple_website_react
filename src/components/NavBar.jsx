import React from 'react'
import day from '../assets/day.png'
import night from '../assets/night.png'
import icon from '../assets/icon.png'
import search from '../assets/search.png'
import logo2 from '../assets/logo2.png'



function NavBar({theme, setTheme}) {

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');

  }
  return (
    <div className='navBar'>
        <img src={theme === 'light' ? icon : logo2} alt="Icon" className='logo'></img>
        <ul className='menu'>
          <li><a href="/home">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/aboutUs">About us</a></li>
          <li><a href="/contact">Contact us</a></li>
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

export default NavBar