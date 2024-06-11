import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
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
margin: 0 auto;
  @media (max-width: 768px) {
    margin-right: 4px;
    padding: 0px 4px;
    // font-weight: 400;
    font-size: 12px;

  }

  &.active {
    color: white;
    background-color: #ff6c00;
  }
`;
