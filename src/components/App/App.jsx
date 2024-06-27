import { Routes, Route, Link, useLocation, Outlet,} from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { School } from "../../pages/School/School";
import { Сontact } from "../../pages/Contact/Contact";
import MobilMenu from '../../Mobil/index'
// import { NotFound } from "../../pages/NotFound/NotFound";
import logo from "../../images/loGo.png";
import {
  Header,
  HeaderDecor,
  Nav,
  StyledLink,
  Logo,
  HeaderText,
  Footer,
 
} from "./App.styled";
import { Suspense } from 'react';
import { routes } from "../../routes";


export const App = () => {
    const location = useLocation();
  return (
    <>
      <Header>
    <HeaderDecor>
        <Link to="/">
            <Logo src={logo} alt="Logo" />
        </Link>
        <HeaderText>ДЮСШ ФК “Оболонь”</HeaderText>
         <MobilMenu/>
        <Nav>
         
          <StyledLink to="/school" state={{ from: location }}>
            ДЮСШ
          </StyledLink>
                    <StyledLink to="/contact" state={{ from: location }}>
            Контакти
          </StyledLink>
          <StyledLink to="https://fc.obolon.ua/" >ФК “Оболонь”</StyledLink>
          </Nav>
          </HeaderDecor>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.SCHOOL} element={<School />} />
        <Route path={routes.CONTACT} element={<Сontact />} />
      </Routes>

      <Footer> © Copyright 2020-2024 </Footer>
    </>
  );
};
export default App;