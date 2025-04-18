import { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import  Menuicon  from '../../assets/img/icon-hamburger.svg';
import './Header.css';

const Header = () => {

  const [mobilenav,setMobilenav]=useState(false);

  const handleMobileNavToggle=()=>{
    setMobilenav(!mobilenav); 
  }
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <nav>
        <p> About</p> 
        <p> Services</p>
        <p> Projects</p>
        <p className='contact'> Contact</p>
      </nav>
      <div className='menu' onClick={handleMobileNavToggle}>
        <img src={Menuicon} alt='hamburger-menu-icon'/>
      </div>
   <nav className={` Mobilenav ${mobilenav?'mobile-navlink':''}`}>
      <ul>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>projects</a></li>
      </ul>
      <div id='mobile-contact'><a href='#'>CONTACT</a></div>

     </nav> 
    </header>
  )
}

export default Header
