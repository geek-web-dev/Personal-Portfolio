import React, { useEffect, useState } from 'react'
import { headerData } from '../data';
import { Link } from 'react-scroll';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(headerData.showLinks);

  const handleMenu = () => {
    setOpenMenu(prev => !prev);
  }

  useEffect(() => {

    const scrollHandlar = () =>{
      setShowHeader(window.scrollY > 50)
    }

    window.addEventListener('scroll',scrollHandlar)
    return() => {
      window.removeEventListener('scroll',scrollHandlar)
    }
  },[])


  return (
    <header className={ showHeader ? "show" : "" }>
      <div className="fluid-container">
        <div className="row align-items-center justify-content-between p-0 m-0">

          <div className="logo col-lg-2 col-6 d-flex align-items-center">
            <h2 className="m-0">{headerData.logo}</h2>
          </div>

          <nav className={`d-flex col-lg-8 justify-content-center ${openMenu ? "open" : ""}`}>
            <Link to='home' spy={true} activeClass='active' offset={-200}>Home</Link>

            <Link to="about" spy={true} activeClass='active' offset={-200}>About</Link>

            <Link to='services' spy={true} activeClass='active' offset={-200}>Services</Link>

            <Link to='resume' spy={true} activeClass='active' offset={-200}>Resume</Link>

            <Link to='portfolio' spy={true} activeClass='active' offset={-200}>Portfolio</Link>

            <Link to='testimonial' spy={true} activeClass='active' offset={-200}>Testmonial</Link>

            <Link to='contact' spy={true} activeClass='active' offset={-200}>Contact</Link>
          </nav>

          <div className="col-lg-2 col-6">
            <div
              className={`menu-icon ms-auto ${openMenu ? "close" : ""}`}
              onClick={() => handleMenu()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
    
        </div>
      </div>
    </header>
  )
}

export default Header