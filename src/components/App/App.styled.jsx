import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  // margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-family: "Montserrat";
  // font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;

    @media (max-width: 768px){
        margin-right: 4px;
          padding: 0px 4px;
          // font-weight: 400;
          font-size: 12px;
          text-align: center;
    }

  &.active {
    color: white;
    background-color: #ff6c00;
  }
`;

export const Logo = styled.img`
  height: 68px;
  margin-left: 40px;
      @media (max-width: 768px){
       height: 40px; 
       margin-left: 5px;
    }
`;

export const Nav = styled.nav`
    display: none;
    margin-left: auto;
    //  padding-right: 15px;   
    @media screen and (min-width:1200px) {
    padding-right: 15px;
    }


        @media screen and (min-width:768px) {
            display: block;
             margin-top: 10px;
            
        }
    
        @media screen and (min-width:1200px) {
            display: flex;
        }

`;

export const HeaderText = styled.p`
  text-align: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
  color: green;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        @media (max-width: 768px){
       font-weight: 400;
       font-size: 26px;
        }
`;

export const Footer = styled.footer`
  text-align: center;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  background: #ffffff;
  margin-top: 5px;
  padding-top: 5px;
  z-index: 9;
  color: black;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 16px;
  line-height: 1.2;
   box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px 15px;
           @media (max-width: 768px){
          // width: 220px;
          font-size: 10px;
              height: 20px;
      margin-top: 0;
       padding-top: 2px;
        }
`;
export const GoBackButton = styled(Link)`
  padding: 2px 0 18px;
  margin: 0 auto 0 20px;

`;
