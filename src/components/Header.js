import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiSearch,FiChevronDown } from "react-icons/fi";
import {FaUserCircle} from "react-icons/fa"
// import logo from '../../img/logo.png';
import './header.css';

const Header = () => {
  return (
    <>
      <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact className="logo" to="/">
                        {/* <img src={logo} alt="logo" />  */}
                        <p>Logo</p>
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    <ul className="nav">
                            <li className="menu-item" > <Link to="#" className="menu-name">Home Page<FiChevronDown /></Link>
                            <ul className="dropdown-item" > 
                                <li> <NavLink onClick="" className='item'  to={`/Online`}> Home V1 </NavLink> </li>
                                <li><NavLink onClick="" className='item' to={`/Offline`}> Home V2 </NavLink> </li>
                                <li><NavLink onClick="" className='item' to={`/Offline`}> Home V3 </NavLink> </li>
                            </ul>
                        </li>
                        <li onClick="" className="menu-item" > <Link to="#" className="menu-name">Recipe Page<FiChevronDown /></Link>
                        <ul className=" dropdown-item" > 
                                <li> <NavLink onClick="" className='item'  to={`/Online`}> Full Width </NavLink> </li>
                                <li><NavLink onClick="" className='item' to={`/Offline`}> Sidebar </NavLink> </li>
                            </ul>
                        </li>
                        <li onClick="" className="menu-item" > <Link to="#" className="menu-name"> Pages<FiChevronDown /> </Link>
                            <ul className="dropdown-item" > 
                                <li> <NavLink onClick="" className='item'  to={`/Online`}> Category </NavLink> </li>
                                <li><NavLink onClick="" className='item' to={`/Offline`}> Archive </NavLink> </li>
                                <li> <NavLink onClick="" className='item'  to={`/Online`}> Favorites </NavLink> </li>
                                <li><NavLink onClick="" className='item' to={`/Offline`}> Profile </NavLink> </li>
                                <li> <NavLink onClick="" className='item'  to={`/Online`}> About </NavLink> </li>
                                <li><NavLink onClick="" className='item' to={`/Offline`}> Blog </NavLink> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink onClick="" activeClassName='is-active' to={`/Contact`}> Element </NavLink> </li>
                    </ul>
                    </nav>     
                </div>   
                <div className="search">
                    <NavLink exact className="" to="/">
                        <FiSearch/>
                    </NavLink>
                </div>
                <div className="user">
                    <NavLink exact className="" to="/">
                        {/* <img src={logo} alt="logo" />  */}
                        <FaUserCircle/>
                    </NavLink>
                </div>
            </div>
	    </div>
    </header>
    </>
  )
}

export default Header
