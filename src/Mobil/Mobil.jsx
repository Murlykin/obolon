import { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { StyledLink } from "./Mobil.styled";
import {  useLocation } from "react-router-dom";

  const MobilMenu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
      const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);
    return (<>
<nav ref={ref} className="navbar">
      <button className="main-nav__button " onClick={() => setNavbarOpen((prev) => !prev)}>
      {navbarOpen ? (
    <MdClose style={{ width: '32px', height: '32px' }} />
  ) : (
    <FiMenu className="main-nav__icone--menu"
      style={{ width: '32px', height: '32px', }} />
  )}
      </button>
    
      <div className={`menu-nav${navbarOpen ? ' show-menu ' : ''}`}>
        <div className="mobile-menu__conteiner">
            <StyledLink to="/school" state={{ from: location }}>
            ДЮСШ
          </StyledLink>
            <StyledLink to="/contact" state={{ from: location }}>
            Контакти
          </StyledLink>
          <StyledLink to="https://fc.obolon.ua/" >ФК “Оболонь”</StyledLink>
          </div>
        </div>        
        </nav>
    </>
    );
};
export default MobilMenu;

