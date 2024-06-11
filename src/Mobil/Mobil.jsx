import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { StyledLink } from "./Mobil.styled";
import {  useLocation } from "react-router-dom";

  const MobilMenu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
    return (<>

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
      
    </>
    );
};
export default MobilMenu;

