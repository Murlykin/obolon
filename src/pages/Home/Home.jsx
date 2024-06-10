import BLogo from '../../images/bB.jpg';
import { BlogotWrap, Logo } from './Home.styled';

export const Home = () => {
  return (
    <BlogotWrap>
      <Logo src={BLogo} alt="picture" />
    </BlogotWrap>
  );
};
