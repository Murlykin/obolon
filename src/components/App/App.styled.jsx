import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";
import background from "../../images/stripes.png";
import backgroundMobil from "../../images/stripes1.png";


export const Header = styled.header`
  display: flex;

  // justify-content: center;
  align-items: center;
  background-color: green;
  // gap: 102px;
  padding: 8px 0 0 0;
  
  // margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;
    @media (max-width: 768px){
    // gap: 10px;
    }
`;
export const HeaderDecor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 90px;
  background-image: url(${background });
  padding: 8px 0;
  background-repeat: no-repeat;
  // margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;
    @media (max-width: 768px){
      background-image: url(${backgroundMobil});
      padding: 12px 0;
      gap: 40px;
    }
`;
export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #013919;
  font-family: "Montserrat";
  // font-style: normal;
  font-weight: 700;
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
&:hover {
color: white;
}
  &.active {
    color: white;
    background-color: #c2272d;
  }
`;

export const Logo = styled.img`
position: absolute;
z-index: 10;
top: 10px; 
  left: 40px;
  height: 200px;
  margin-left: 0px;
        @media (max-width: 768px){
       height: 120px; 
      //  margin-left: 5px;
       top: 0px; 
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
  // text-align: center;
  // align-items: center;
  padding-left: 300px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ffff;
  text-shadow: 5px 5px 3px rgba(0,0,0,0.3);
        @media (max-width: 768px){
      line-height: 1.2;
       font-size: 12px;
       padding-left: 120px;
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
  color: #013919;
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
