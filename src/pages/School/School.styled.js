import styled from 'styled-components';

export const SchoolD = styled.div`
  width: 1200px;
  margin: 40px 220px 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 40px 0 50px;
  }
`;


export const ScoolContImg = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;
export const SchoolImg = styled.img`
  width: 500px;
`;

export const SchoolP = styled.p`
  margin-top: 20px;
  margin-right: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 16px;
  line-height: 1.6;
`;
export const SchoolPBolt = styled.span`
  font-family: "Montserrat";
  color: green;
  font-size: 18px;
  line-height: 1.8;
  font-synthesis: weight;
  font-weight: bold;
`;
export const SchoolLegend = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
  margin-left: -40px;
          @media screen and (max-width:768px) {
margin-left: 0px;
`;
export const TeamsDLegend = styled.li`
  list-style: none;
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 230px;
}
`;
export const SchoolTeams = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 20px;
`;

export const TeamConteiner = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  outline: 2px solid var(--technical-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
`;

export const TeamTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin: 0px;
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    font-size: 36px;
    line-height: 1.16;
    margin-bottom: 50px;
  }
`;

export const TeamD = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 -30px -30px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
  padding: 0px;
  list-style: none;
  display: inline-block;
  // margin: 0 0.5rem;
  // animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  // animation-duration: 3s; /* don't forget to set a duration! */
  // animate__fast: 800ms;
`;
export const TeamsDIrems = styled.li`
  list-style: none;
        @media screen and (min-width:768px) {
background-color: var(--body-background-color);
        @media screen and (min-width:1200px) {
background-color: var(--body-background-color);
width: 270px;
}
`;

export const TeamsContainer = styled.div`
  display: block;
  padding: 30px 0;
  margin-top: 0;
  margin-bottom: 0;
  outline: 2px solid var(--technical-color);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const TeamsHeder = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: 10px;
`;
export const TeamsText = styled.p`
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--text-color);
  margin-top: 0;
  font-size: 16px;
  color: var(--text-color-p);
`;
export const TeamsSochmed = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  list-style: none;
  padding: 0;
  // margin: 0
`;

export const TeamsItem = styled.li`
  box-sizing: border-box;
  outline: 2px solid var(--technical-color);
  transition: background-color 250ms var(--timing-functione),
    fill 250ms var(--timing-functione);
`;
export const TeamsLinks = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    color: var(--icone-color);
    fill: currentColor;
    outline: 2px solid var(--technical-color);
    transition: background-color 250ms var(--timing-functione), fill 250ms var(--timing-functione);
    &:hover,
    &:focus {
    background-color: var(--beckground-color);
    fill: var(--body-background-color);
`;
export const TeamsSvg = styled.svg`
  &:hover,
  &:focus {
    fill: var(--body-background-color);
  }
`;
export const ContImg = styled.img`
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;