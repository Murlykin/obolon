import BLogo from '../../images/bB.jpg';
import BLogo1 from '../../images/iim.jpg';
import { BlogotWrap, Logo, Beck, BlogoD1, BlogoD2 } from './Home.styled';

export const Home = () => {
  return ( <>
    <BlogotWrap>
      <BlogoD1>
      <Beck src={BLogo1} alt="picture" />
      </BlogoD1>
       <BlogoD2>
      <Logo src={BLogo} alt="picture" /></BlogoD2>
    </BlogotWrap>
  </>
  );
};
