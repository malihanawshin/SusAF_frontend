import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks,
  NavBtn, NavBtnLink} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import "./nav.css";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)
  const [showButton, setVisibility] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    checkWalletConnection();
  }, [])


  const checkWalletConnection = async (e) => {
    if (window.ethereum) { 
      window.ethereum.request({ method: 'eth_accounts' }).then(result => {
        if (result.length === 0) { // MetaMask is locked or the user has not connected any accounts
          setVisibility(false);
        }
        else {
          setVisibility(true);
        }
    })
    } 
  }  

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    
    </>
  )
}

export default Navbar 