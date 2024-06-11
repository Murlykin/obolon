import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
from{
opacity: 0;
transform: translateX(-100%)
}
to{
    opacity: 1;
    transform: translateX(0);
}
`;

export const BlogotWrap = styled.div`
  display: flex;
  justify-content: center;
  // padding: 8px 0;
  // margin-top: 2px;
  animation: ${fadeIn} 1.5s ease-out;
  @media (max-width: 768px) {
    width: 100%;
    margin: 70px 0;
  }
`;
export const BlogoD1 = styled.div`
display: none;
  @media (max-width: 768px) {
    width: 450px;
    display: block;
    position: absolute;
    z-index: -100;
  }
`;
export const BlogoD2 = styled.div`
  @media (max-width: 768px) {
    display: none;
     position: absolute;
    z-index: 100;
  }
`;
export const Logo = styled.img`

  width: 1100px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;
`;
export const Beck = styled.img`

 
  width: 1100px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;
`;
